"use client";
import { useState, useEffect, useRef } from "react";
import PlantCard from "./PlantCard";
import TextShorter from "@/app/utils/TextShorter";

interface Plant {
  common_name: string;
  scientific_name: string;
  description: string;
  img: string;
}

const TrendingTopics = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const isInitialized = useRef<boolean>(false);
  useEffect(() => {
    if (!isInitialized.current) {
      const fetchData = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/plants/trending`);
          const data = await res.json();
          setPlants(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      isInitialized.current = true;
    }
  }, []);
  return (
    <div className="flex w-full py-8 flex-col">
      <div className="w-full flex justify-center">
        <h3 className="text-[52px] text-gray-700 font-black">
          Most Searched Plants
        </h3>
      </div>
      <div className="w-full flex flex-wrap mt-4">
        {plants
          ? plants.map((plant) => {
              return (
                <PlantCard
                  key={plant.scientific_name}
                  props={{
                    plantName: TextShorter(plant.common_name, 12),
                    scf_name: plant.common_name,
                    dsc: TextShorter(plant.description, 100),
                    img: plant.img,
                  }}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default TrendingTopics;
