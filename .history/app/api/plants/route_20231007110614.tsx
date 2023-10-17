import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest) {
  const plants = await prisma.plants.findUnique({
    where: {
      scientific_name,
    },
  });
  return NextResponse.json(plants);
}
