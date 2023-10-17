import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const plants = await prisma.plants.findUnique({
    where: {
      scientific_name: id,
    },
  });
  return NextResponse.json(plants);
}
