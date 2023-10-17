import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import UrlGen from "@/app/utils/SlugGen";
import { Prisma } from "@prisma/client";
import FullTxtKeyWordGen from "@/app/utils/FullTxtKeyWordGen";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");
  const type = searchParams.get("type");

  let results = null;

  if (query) {
    if (query.includes(" ")) {
      let keyWords = FullTxtKeyWordGen(query);
      const results = await prisma.search.findMany({
        where: {
          common_name: {
            search: keyWords,
          },
          scientific_name: {
            search: keyWords,
          },
          decription: {
            search: keyWords,
          },
        },
        orderBy: {
          _relevance: {
            fields: ["common_name", "scientific_name", "decription"],
            search: keyWords,
            sort: "desc",
          },
        },
        select: {
          common_name: true,
          scientific_name: true,
          type: true,
          id: true,
        },
        take: 5,
      });
      return NextResponse.json(results);
    } else {
      const results = await prisma.search.findMany({
        where: {
          OR: [
            { common_name: { contains: query, mode: "insensitive" } },
            { scientific_name: { contains: query, mode: "insensitive" } },
          ],
        },
        take: 5,
      });
      return NextResponse.json(results);
    }
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
