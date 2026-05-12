import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import DashboardView from "@/components/DashboardView";
import { getDetectedRegion } from "@/lib/region-server";
import { Prisma } from "@prisma/client";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  const region = await getDetectedRegion();

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      orders: {
        include: {
          plan: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      intake: true,
    },
  });

  if (!user) {
    redirect("/");
  }

  const getPriceValue = (pricesJson: Prisma.JsonValue) => {
    const prices = pricesJson as Record<string, number>;
    return prices[region.currency] || prices.USD;
  };

  // Current plan is the most recent order
  const latestOrder = user.orders[0];
  const currentPlan = latestOrder
    ? {
        drugType: latestOrder.plan.drugType,
        tier: latestOrder.plan.tier,
        price: getPriceValue(latestOrder.plan.prices),
        durationMonths: latestOrder.plan.durationMonths,
        status: latestOrder.status,
        createdAt: latestOrder.createdAt.toISOString(),
      }
    : undefined;

  const dashboardData = {
    user: {
      email: user.email,
      name: user.name,
    },
    region,
    currentPlan,
    orders: user.orders.map((o) => ({
      id: o.id,
      status: o.status,
      createdAt: o.createdAt.toISOString(),
      plan: {
        drugType: o.plan.drugType,
        tier: o.plan.tier,
        price: getPriceValue(o.plan.prices),
        durationMonths: o.plan.durationMonths,
      },
    })),
    intake: user.intake
      ? {
          weight: user.intake.weight,
          goalWeight: user.intake.goalWeight,
        }
      : undefined,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <DashboardView data={dashboardData as any} />;
}
