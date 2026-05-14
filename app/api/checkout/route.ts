import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { getDetectedRegion } from "@/lib/region-server";
import { getBaseUrl } from "@/lib/region-shared";

export const dynamic = "force-dynamic";



export async function POST(req: Request) {
  try {
    const authSession = await auth.api.getSession({
      headers: await headers(),
    });

    if (!authSession) {
      return NextResponse.json({ error: "Unauthorized. Please log in to complete your order." }, { status: 401 });
    }

    const userId = authSession.user.id;
    const userEmail = authSession.user.email;
    const region = await getDetectedRegion();

    const { planId } = await req.json();


    if (!planId) {
      return NextResponse.json({ error: "Plan ID is required" }, { status: 400 });
    }

    const plan = await prisma.plan.findUnique({
      where: { id: planId },
    });

    if (!plan || !plan.stripePriceId) {
      return NextResponse.json({ error: "Invalid plan or plan not configured for Stripe" }, { status: 400 });
    }

    const prices = plan.prices as Record<string, number>;
    const totalPrice = prices[region.currency] || prices.USD;

    // Support for testing without Stripe
    if (process.env.MOCK_CHECKOUT === "true") {
      await prisma.order.create({
        data: {
          userId: userId,
          planId: plan.id,
          status: "paid",
          stripeSessionId: `mock_${Date.now()}`,
        },
      });
      return NextResponse.json({ 
        url: `${getBaseUrl()}/dashboard?status=success`,
        currency: region.currency,
        total: totalPrice
      });
    }



    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: userEmail,
      line_items: [
        {
          price: plan.stripePriceId,
          quantity: 1,
        },
      ],
      success_url: `${getBaseUrl()}/dashboard?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getBaseUrl()}/dashboard?status=cancelled`,
      metadata: {
        userId: userId,
        planId: plan.id,
      },
    });

    // Create a pending order
    await prisma.order.create({
      data: {
        userId: userId,
        planId: plan.id,
        status: "pending",
        stripeSessionId: checkoutSession.id,
      },
    });


    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
