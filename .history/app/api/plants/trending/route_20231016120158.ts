import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const currentDate = new Date();
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  const trending = await prisma.views.groupBy({
    where: { time: { gte: sevenDaysAgo } },
    by: ["viewId"],
    _count: { viewId: true },
    orderBy: { _count: { viewId: "desc" } },
    take: 10,
    inclued:{
        plants:{
            select:{}
        }
    }
  });

  return NextResponse.json(trending);
}