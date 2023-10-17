"use client";
import { useState, useEffect, useRef } from "react";
import PlantCard from "./PlantCard";

interface Plant {}

const TrendingTopics = () => {
  const [plants, setPlants] = useState(null);
  const isInitialized = useRef<boolean>(false);
  useEffect(() => {
    if (!isInitialized.current) {
      const fetchData = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/plant/trending`);
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
        <PlantCard
          props={{
            name: "a",
            scf_name: "as c",
            img: "",
            dsc: "edqwad awd qwdxsq d qd qd qdw  qwasd xqa wsdqd qwd sfcewsadfw efdwsefdc edfcwed wedqwedc ade",
          }}
        />
      </div>
    </div>
  );
};

export default TrendingTopics;
