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
              className="h-full w-[40%] bg-transparent rounded-xl overflow-hidden object-contain shadow-md"
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
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="h-full w-[40%] bg-custom-green rounded-xl flex items-center flex-col p-4 shadow-md">
              <div
                role="status"
                className="w-full animate-pulse flex items-center"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[320px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[320px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
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
