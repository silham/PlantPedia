"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextShorter from "@/app/utils/TextShorter";
import Link from "next/link";
import UrlGen from "@/app/utils/SlugGen";

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
    <div className="flex rounded-xl bg-custom-blue-green w-full h-[80vh] my-[5vh] flex-col shadow-md">
      <div className="w-full h-[15%] flex justify-center">
        <h3 className="text-[52px] text-white font-black">Plant of the Day</h3>
      </div>
      <div className="w-[full] h-[85%] flex items-center pt-4 pb-8 px-4 justify-around">
        {Pod.plant.common_name != "" ? (
          <>
            <div
              className="h-full w-[40%] bg-amber-800 rounded-xl overflow-hidden object-contain shadow-md"
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
            <div className="h-full w-[40%] bg-custom-green rounded-xl flex items-center flex-col p-4 shadow-md">
              <h4 className="text-white text-[36px] font-bold leading-snug">
                {TextShorter(Pod.plant.common_name, 20)}
              </h4>
              <h5 className="text-white text-[24px] italic font-semibold mb-2">
                {Pod.plant.scientific_name}
              </h5>
              <div className="bg-white text-[16px] w-full flex-grow rounded-md p-2 text-justify">
                {TextShorter(Pod.plant.description, 350)}
              </div>
              <Link href={UrlGen("plants", Pod.plant.scientific_name)}>
                <button className="bg-custom-blue-green text-white text-[16px] font-semibold mt-2 py-2 px-4 rounded-md">
                  Learn more...
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div
              className="h-full w-[40%] bg-gray-300 rounded-xl overflow-hidden object-contain shadow-md"
              id="pod_imageContainer"
            >
              <div
                role="status"
                className="flex items-center justify-center h-full w-full bg-gray-300 animate-pulse dark:bg-gray-700"
              >
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlantOfDay;
