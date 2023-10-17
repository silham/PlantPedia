import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const plants = await prisma.plants.findUnique({
    where: {
      scientific_name,
    },
  });
  return NextResponse.json(plants);
}
