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
            <p className="text-gray-900 font-medium text-[18px]"></p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;
