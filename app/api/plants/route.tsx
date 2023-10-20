import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const plants = await prisma.plants.findMany({
    select: {
      common_name: true,
      scientific_name: true,
      synonyms: true,
    },
    orderBy: {
      common_name: "asc",
    },
  });

  return NextResponse.json(plants);
}
