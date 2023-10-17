"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const PlantOfDay = () => {
  const [Pod, setPod] = useState({
    id: 0,
    plantsId: "",
    plant: {
      common_name: "",
      scientific_name: "",
      img: "",
      description: "",
    },
  });
  useEffect(() => {
    const fetchPod = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/pod`);
        const data = await res.json();
        console.log(data);
        setPod(data);
        console.log(Pod);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPod();
  }, []);

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const imgWidth = Math.floor((vw - 232) * 0.4);
  const imgHeight = Math.floor(vh * 0.8 - 48);

  return (
    <div className="flex rounded-xl bg-custom-blue-green w-full h-[80vh] my-[5vh] flex-col">
      <div className="w-full h-fit flex justify-center">
        <h3 className="text-[52px] text-white font-black">Plant of the Day</h3>
      </div>
      <div className="w-full h-full flex items-center pt-4 pb-8 px-4 justify-around">
        {Pod.plant.common_name != "" ? (
          <>
            <div
              className="h-full w-[40%] bg-amber-800 rounded-xl overflow-hidden"
              id="pod_imageContainer"
            >
              <Image
                src={`https://ik.imagekit.io/shakil/agro_finder/tr:w-${imgWidth},h-${imgHeight}/${Pod.plant.img}`}
                width={imgWidth}
                height={imgHeight}
                alt={Pod.plant.common_name}
              />
            </div>
            <div className="h-full w-[40%] bg-custom-green rounded-xl"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PlantOfDay;
