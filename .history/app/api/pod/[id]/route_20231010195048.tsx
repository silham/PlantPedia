import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const pod = await prisma.plantOfDay.findUniqueOrThrow({
    where: {
      id: 1,
    },
    include: {
      plant: true,
    },
  });
  return NextResponse.json(pod);
}
