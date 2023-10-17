import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const plants = await prisma.plants.findMany();
  return NextResponse.json(plants);
}
