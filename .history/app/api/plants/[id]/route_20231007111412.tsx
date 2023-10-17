import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const plants = await prisma.search.findMany({
    where: {
      scientific_name: { equals: id.replace(/-/g, " ") },
    },
  });
  return NextResponse.json(plants);
}
