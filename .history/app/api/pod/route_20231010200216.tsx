import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const pod = await prisma.plantOfDay.findUnique({
    where: {
      id: 1,
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
