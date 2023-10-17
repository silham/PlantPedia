import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");

  if (query) {
    const plantResults = prisma.plants.findMany({
      where: {
        OR: [
          { common_name: { contains: query } },
          { scientific_name: { contains: query } },
        ],
      },
    });
    return NextResponse.json(plantResults);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
