import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const q = searchParams.get("q");

  if (q) {
    const plantResults = await prisma.$queryRaw(
      Prisma.raw(`SELECT * FROM plant`)
    );
    return NextResponse.json(plantResults);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
