import TextShorter from "@/app/utils/TextShorter";
import Link from "next/link";
import React from "react";

const PlantCard = () => {
  return (
    <div className="w-[25%] p-3">
      <Link href="#">
        <div className="w-full h-64 bg-custom-blue-green rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 duration-150 ease-in-out">
          <div className="w-full h-1/2 bg-amber-700"></div>
          <div className="w-full h-1/2 px-2">
            <h5 className="text-white font-black text-[30px]">Rice</h5>
            <p className="text-white font-medium text-[16px] text-justify">
              {TextShorter(
                "Oryza sativa is the plant species most commonly referred to in English as rice. It is the type of farmed rice whose cultivars are most common globally, and was first domesticated in the Yangtze River basin in China 13,500 to 8,200 years ago.",
                100
              )}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;
