"use client";
import prisma from "@/prisma/client";
import { useEffect } from "react";

const PlantOfDay = () => {
  useEffect(() => {
    async function getPod() {
      const data = await prisma.plantOfDay.findUnique({
        where: {
          id: 1,
        },
        include: {
          plant: true,
        },
      });
      console.log(data.plant);
    }
    getPod();
  });
  return (
    <div className="flex rounded-xl bg-custom-blue-green w-full h-[80vh] my-[10vh] flex-col">
      <div className="w-full h-fit flex justify-center">
        <h3 className="text-[52px] text-white font-black">Plant of the Day</h3>
      </div>
      <div className="w-full h-full flex items-center py-4 px-8"></div>
    </div>
  );
};

export default PlantOfDay;
