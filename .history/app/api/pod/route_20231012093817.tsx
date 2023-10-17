import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const totPods = 3;
  const podNum = Math.floor(Math.random() * 3);
  const pod = await prisma.plantOfDay.findUnique({
    where: {
      id: 2,
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
