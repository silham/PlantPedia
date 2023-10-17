"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextShorter from "@/app/utils/TextShorter";

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
  const [imgWH, setImgWH] = useState([0, 0]);
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
    if (typeof window !== "undefined") {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const imgWidth = Math.floor((vw - 232) * 0.4);
      const imgHeight = Math.floor(vh * 0.8 - 48);
      setImgWH([imgWidth, imgHeight]);
    }
  }, []);

  return (
    <div className="flex rounded-xl bg-custom-blue-green w-full h-[80vh] my-[5vh] flex-col">
      <div className="w-full h-[15%] flex justify-center">
        <h3 className="text-[52px] text-white font-black">Plant of the Day</h3>
      </div>
      <div className="w-[full] h-[85%] flex items-center pt-4 pb-8 px-4 justify-around">
        {Pod.plant.common_name != "" ? (
          <>
            <div
              className="h-full w-[40%] bg-amber-800 rounded-xl overflow-hidden object-contain"
              id="pod_imageContainer"
            >
              {imgWH[0] ? (
                <Image
                  src={`https://ik.imagekit.io/shakil/agro_finder/tr:w-${imgWH[0]},h-${imgWH[1]}/${Pod.plant.img}`}
                  width={imgWH[0]}
                  height={imgWH[1]}
                  alt={Pod.plant.common_name}
                />
              ) : null}
            </div>
            <div className="h-full w-[40%] bg-custom-green rounded-xl flex items-center flex-col p-4">
              <h4 className="text-white text-[36px] font-bold">
                {TextShorter(Pod.plant.common_name, 20)}
              </h4>
              <h5 className="text-white text-[24px] italic font-semibold">
                {Pod.plant.scientific_name}
              </h5>
              <div className="bg-white w-full flex-grow"></div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PlantOfDay;
