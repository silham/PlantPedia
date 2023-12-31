import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { promises } from "dns";

export async function GET(request: NextRequest) {
  const currentDate = new Date();
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  const trending = await prisma.views.groupBy({
    where: { time: { gte: sevenDaysAgo } },
    by: ["viewId"],
    _count: { viewId: true },
    orderBy: { _count: { viewId: "desc" } },
    take: 8,
  });

  const trendingPlants = await Promise.all(
    trending.map(async (view) =>{
      const plant = await prisma.plants.findUnique({
        where: {id:view.viewId},
        select:{
          common_name: true,
          scientific_name: true,
          description: true,
          img:true
        }
      });
      return {...plant}
    })
  )

  return NextResponse.json(trendingPlants);
}