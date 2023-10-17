import TextShorter from "@/app/utils/TextShorter";
import Link from "next/link";
import React from "react";

const PlantCard = () => {
  return (
    <div className="w-[25%] p-2">
      <Link href="#">
        <div className="w-full h-64 bg-[#9AEB59] rounded-xl shadow-xl overflow-hidden cursor-pointer">
          <div className="w-full h-1/2 bg-amber-700"></div>
          <div className="w-full h-1/2 px-2">
            <h5 className="text-gray-800 font-black text-[32px]">Rice</h5>
            <p className="text-gray-900 font-medium text-[16px]">
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