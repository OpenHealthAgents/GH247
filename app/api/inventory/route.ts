import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getDetectedRegion } from "@/lib/region-server";
import { getCountryCurrencyMap, getCountryPriceMap } from "@/lib/pricing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const region = await getDetectedRegion();
    
    const products = await prisma.product.findMany({
      where: { isActive: true },
      include: {
        plans: {
          where: { isActive: true },
          include: {
            prices: true,
          },
          orderBy: { durationMonths: "asc" },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({
      products: products.map((product) => ({
        ...product,
        plans: product.plans.map((plan) => ({
          ...plan,
          priceCurrencies: getCountryCurrencyMap(plan.prices),
          prices: getCountryPriceMap(plan.prices),
        })),
      })),
      region,
    });
  } catch (error) {
    console.error("Failed to fetch inventory:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
