import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();

  thirtyDaysAgo.setDate(currentDate.getDate() - 7);
  const trending = await prisma.views.groupBy({
    where: { time: { gte: new Date("2023-10-09") } },
    by: ["viewId"],
    _count: { viewId: true },
    orderBy: { _count: { viewId: "desc" } },
    take: 10,
  });
}
