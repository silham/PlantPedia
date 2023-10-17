import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const s_name = id.replace(/-/g, " ");
  const plants = await prisma.search.findMany({
    where: {
      scientific_name: { equals: s_name },
    },
    select: {
      common_name: true,
    },
  });
  return NextResponse.json(plants);
}
