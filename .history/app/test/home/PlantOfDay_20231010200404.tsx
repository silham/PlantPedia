"use client";
import { useEffect, useState } from "react";

const PlantOfDay = () => {
  const [Pod, setPod] = useState();
  useEffect(() => {
    const fetchPod = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/pod`);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPod();
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
