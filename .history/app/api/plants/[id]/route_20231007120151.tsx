import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const s_name = id.toLowerCase().replace(/-/g, " ");
  const plants = await prisma.plants.findUnique({
    where: {
      scientific_name: s_name,
    },
  });
  return NextResponse.json(plants);
}
