import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");
  const type = searchParams.get("type");

  let results = [{}];

  if (query) {
    switch (type) {
      case "plant":
        const plantResults = await prisma.plants.findMany({
          where: {
            OR: [
              { common_name: { contains: query } },
              { scientific_name: { contains: query } },
            ],
          },
          take: 5,
        });
        results = plantResults;
        break;
      default:
        break;
    }
    return NextResponse.json(results);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
