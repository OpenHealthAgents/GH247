import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import { createRazorpayOrder, getRazorpayKeyId, toRazorpayAmount } from "@/lib/razorpay";
import { getDetectedRegion } from "@/lib/region-server";

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

    const { planId, address } = await req.json();


    if (!planId) {
      return NextResponse.json({ error: "Plan ID is required" }, { status: 400 });
    }

    const plan = await prisma.plan.findUnique({
      where: { id: planId },
    });

    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const prices = plan.prices as Record<string, number>;
    const totalPrice = prices[region.currency] || prices.USD;
    const amount = toRazorpayAmount(totalPrice);

    if (amount < 100) {
      return NextResponse.json({ error: "Order amount must be at least 100 paise." }, { status: 400 });
    }

    const receipt = `order_${Date.now()}`;
    const razorpayOrder = await createRazorpayOrder({
      amount,
      currency: region.currency,
      receipt,
      notes: {
        userId,
        planId: plan.id,
        email: userEmail,
        street: address?.street || "",
        city: address?.city || "",
        state: address?.state || "",
        zip: address?.zip || "",
      },
    });

    await prisma.order.create({
      data: {
        userId: userId,
        planId: plan.id,
        status: "pending",
        razorpayOrderId: razorpayOrder.id,
      },
    });

    return NextResponse.json({
      key: getRazorpayKeyId(),
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      name: "Wellora",
      description: `${plan.drugType} ${plan.durationMonths}-month program`,
      prefill: {
        email: userEmail,
        name: authSession.user.name || "",
      },
      total: totalPrice,
    });
  } catch (error) {
    console.error("Razorpay Checkout Error:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
