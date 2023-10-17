import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();

  thirtyDaysAgo.setDate(currentDate.getDate() - 7);
  const trending = await prisma.views.groupBy({
    where: { date: { gte: new Date("2023-10-09") } },
    by: ["pageId"],
    _count: { pageId: true },
    orderBy: { _count: { pageId: "desc" } },
    take: 10,
  });
}
