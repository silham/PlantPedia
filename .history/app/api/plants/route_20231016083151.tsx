import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();

  thirtyDaysAgo.setDate(currentDate.getDate() - 7);
  const trending = await prisma.views.findMany({
    where: {
      time: {
        gte: thirtyDaysAgo,
        lte: currentDate,
      },
    },
    orderBy: {
      views: "desc",
    },
    take: 10,
  });
}
