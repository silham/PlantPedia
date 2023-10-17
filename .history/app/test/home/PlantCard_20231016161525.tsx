import React from "react";

const PlantCard = () => {
  return (
    <div className="w-[25%] p-2">
      <div className="w-full h-64 bg-[#9AEB59] rounded-xl shadow-xl overflow-hidden">
        <div className="w-full h-1/2 bg-amber-700"></div>
        <div className="w-full h-1/2 px-2">
          <h5 className="text-gray-800 font-bold text-[32px]">Rice</h5>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
