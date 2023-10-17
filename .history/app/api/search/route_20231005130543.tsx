import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const q = searchParams.get("q");

  if (q) {
    const plants = await prisma.plants.findMany({
      where: {
        common_name: { contains: q },
      },
    });
    return NextResponse.json(q);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
