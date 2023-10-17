import React from "react";
import PlantCard from "./PlantCard";

const TrendingTopics = () => {
  return (
    <div className="flex w-full py-8 flex-col">
      <div className="w-full flex justify-center">
        <h3 className="text-[52px] text-gray-700 font-black">
          Most Searched Plants
        </h3>
      </div>
      <div className="w-full flex flex-wrap mt-4">
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </div>
    </div>
  );
};

export default TrendingTopics;
