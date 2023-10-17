"use client";
import { useState, useEffect, useRef } from "react";
import PlantCard from "./PlantCard";
import CardLoading from "./CardLoading";

interface Plant {
  common_name: string;
  scientific_name: string;
  description: string;
  img: string;
}

const TrendingTopics = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [imgW, setImgW] = useState(0);
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
      if (typeof window !== "undefined") {
        const vw = window.innerWidth;
        const imgWidth = Math.floor((vw - 200) * 0.25);
      }
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
        {plants.length > 0 ? (
          plants.map((plant) => {
            return (
              <PlantCard
                key={plant.scientific_name}
                props={{
                  plantName: plant.common_name,
                  scf_name: plant.scientific_name,
                  dsc: plant.description,
                  img: plant.img,
                }}
              />
            );
          })
        ) : (
          <>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </>
        )}
      </div>
    </div>
  );
};

export default TrendingTopics;
