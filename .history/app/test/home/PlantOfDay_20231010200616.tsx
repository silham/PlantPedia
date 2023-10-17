"use client";
import { useEffect, useState } from "react";

const PlantOfDay = () => {
  const [Pod, setPod] = useState({
    id: 1,
    plantsId: "abelmoschus_esculentus",
    plant: {
      common_name: "Okra, Lady’s fingers",
      scientific_name: "Abelmoschus esculentus1",
      img: "Abelmoschus-caillei-1.jpg",
      description:
        "Okra, known in some English-speaking countries as lady’s fingers, is a flowering plant in the mallow family. It has edible green seed pods. The geographical origin of okra is disputed, with supporters of West African, Ethiopian, Southeast Asian, and South Asian origins",
    },
  });
  useEffect(() => {
    const fetchPod = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/pod`);
        const data = await res.json();
        setPod(data);
        console.log(Pod);
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
