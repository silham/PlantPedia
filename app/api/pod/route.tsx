import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const totPods = await prisma.plantOfDay.count();
  const podNum = Math.floor(Math.random() * totPods + 1);
  const pod = await prisma.plantOfDay.findUnique({
    where: {
      id: podNum,
    },
    include: {
      plant: {
        select: {
          common_name: true,
          scientific_name: true,
          img: true,
          description: true,
        },
      },
    },
  });
  return NextResponse.json(pod);
}
