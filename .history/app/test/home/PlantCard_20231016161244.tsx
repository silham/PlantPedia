import React from "react";

const PlantCard = () => {
  return (
    <div className="w-[25%] p-2">
      <div className="w-full h-64 bg-custom-green rounded-xl shadow-xl overflow-hidden">
        <div className="w-full h-1/2 bg-amber-700"></div>
        <div className="w-full h-1/2"></div>
      </div>
    </div>
  );
};

export default PlantCard;
