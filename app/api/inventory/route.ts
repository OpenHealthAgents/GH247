import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getDetectedRegion } from "@/lib/region-server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const region = await getDetectedRegion();
    
    const products = await prisma.product.findMany({
      where: { isActive: true },
      include: {
        plans: {
          where: { isActive: true },
          orderBy: { durationMonths: "asc" },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({
      products,
      region,
    });
  } catch (error) {
    console.error("Failed to fetch inventory:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
