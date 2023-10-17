import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");

  if (q) {
    const plantResults =
      await prisma.$queryRaw`SELECT common_name, scientific_name, id,
  (MATCH(common_name, scientific_name) AGAINST('${query}*' IN BOOLEAN MODE)) AS relevance_score
FROM plants
WHERE MATCH(common_name, scientific_name) AGAINST('${query}*' IN BOOLEAN MODE)`;
    return NextResponse.json(plantResults);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
