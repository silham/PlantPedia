import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(
  request: NextApiRequest,
  res: NextApiResponse,
  { params: { id } }: Props
) {
  const s_name = id.toLowerCase().replace(/-/g, "_");
  const plants = await prisma.plants.findUnique({
    where: {
      id: s_name,
    },
    include: {
      taxonomy: true,
    },
  });

  if (plants) {
    return res.status(200).json(plants);
  } else {
    return res.status(404).json({ error: "Plant not found" });
  }
}
