import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");

  if (query) {
    const plantResults =
      await prisma.$queryRaw`SELECT common_name, scientific_name, id, 
  ts_rank_cd(to_tsvector('english', common_name || ' ' || scientific_name), plainto_tsquery('english', '${query}')) AS relevance_score
FROM plants
WHERE to_tsvector('english', common_name || ' ' || scientific_name) @@ plainto_tsquery('english', '${query}');
`;
    return NextResponse.json(plantResults);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
