import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";



export async function GET(request: NextRequest) {
    const searchParams = new URL(request.url).searchParams;
  const id = searchParams.get("id");
  const s_name = id.toLowerCase().replace(/-/g, "_");
  const plants = await prisma.plants.findUnique({
    where: {
      id: s_name,
    },
  });
  return NextResponse.json(plants);
}
