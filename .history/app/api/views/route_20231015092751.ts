import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const s_name = id.toLowerCase().replace(/-/g, "_");
  const plants = await prisma.plants.findUnique({
    where: {
      id: s_name,
    },
  });
  return NextResponse.json(plants);
}
