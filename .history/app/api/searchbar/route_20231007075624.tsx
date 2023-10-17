import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import UrlGen from "@/app/utils/SlugGen";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");
  const type = searchParams.get("type");

  let results = null;

  if (query) {
    if (query.includes(" ")) {
      //todo
    } else {
      const plantResults = await prisma.search.findMany({
        where: {
          OR: [
            { common_name: { contains: query } },
            { scientific_name: { contains: query } },
          ],
        },
        take: 5,
        select: {
          common_name: true,
          scientific_name: true,
          id: true,
        },
      });
      results = plantResults;
    }
    return NextResponse.json(results);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}