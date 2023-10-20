import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const s_name = id.toLowerCase().replace(/-/g, "_");
  const plants = await prisma.plants.findUnique({
    where: {
      id: s_name,
    },
    include: {
      taxonomy: true,
    },
  });

  return NextResponse.json(plants);
}
