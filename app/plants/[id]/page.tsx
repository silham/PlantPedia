"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import ViewTracker from "@/app/utils/TrackViews";
import Loader from "./Loader";
interface Props {
  params: { id: string };
}

interface Plant {
  id: string;
  common_name: string;
  scientific_name: string;
  synonyms: string[];
  description: string;
  min_h: number;
  max_h: number;
  min_ph: number;
  max_ph: number;
  min_temp: number;
  max_temp: number;
  water: string;
  habit: string;
  wikipedia: string;
  britannica: string;
  img: string;
  imgs: string[];
  taxonomyId: string;
}

const Plant = ({ params: { id } }: Props) => {
  const [plant, setPlant] = useState<Plant>();
  const [imgArray, setImgArray] = useState<any[]>();
  const isInitialized = useRef<boolean>(false);
  const isPlantFound = useRef<boolean>(false);
  const s_name = id.replace(/-/g, " ");
  const plantId = id.replace(/-/g, "_");

  const images = [
    {
      original: "/placeholder.webp",
      thumbnail: "/placeholder.webp",
    },
    {
      original: "/placeholder.webp",
      thumbnail: "/placeholder.webp",
    },
    {
      original: "/placeholder.webp",
      thumbnail: "/placeholder.webp",
    },
  ];

  useEffect(() => {
    if (!isInitialized.current) {
      const fetchPlant = async () => {
        const res = await fetch(`/api/plants/${plantId}`);
        const data: Plant = await res.json();
        setPlant(data);
      };
      fetchPlant();
      if (plant) {
        console.log(plant);
        isPlantFound.current = true;
        setImgs();
        isInitialized.current = true;
      }
    }
  }, [plant]);

  const setImgs = () => {
    const imgs = plant?.imgs.map((image) => {
      const imgObject = {
        original: `https://ik.imagekit.io/shakil/agro_finder/tr:w-600,h-400/${image}`,
        thumbnail: `https://ik.imagekit.io/shakil/agro_finder/tr:w-225,h-150/${image}`,
        originalAlt: plant.common_name,
        thumbnailAlt: plant.common_name,
        originalTitle: plant.common_name,
        thumbnailTitle: plant.common_name,
      };
      return { ...imgObject };
    });
    setImgArray(imgs);
    console.log(imgArray);
  };

  return (
    <>
      <div className="w-screen bg-slate-100 min-h-[200vh]">
        <header className="py-2 fixed z-20 top-0 left-0 flex flex-row justify-between items-center w-full px-[100px] bg-slate-50 shadow-lg">
          <div className="h-full flex items-center justify-center">
            <Image src="/plantpedia.png" width={200} height={90} alt="logo" />
          </div>
          <nav className="flex justify-between text-[16px] font-semibold text-gray-900 w-[25%]">
            <Link href="/plants">Plants</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about#">About</Link>
          </nav>
        </header>
        {plant ? (
          <>
            <div className="w-full flex pt-20 flex-row px-[100px] text-gray-900 text-[32px] min-h-160px py-3 justify-center">
              <h1 className="font-black">{plant.common_name}&nbsp;</h1>
              &#40;
              <h2 className="font-semibold italic text-gray-800">
                {plant.scientific_name}
              </h2>
              &#41;
            </div>
            <div className="w-full flex flex-row px-[100px]">
              <div className="flex-1">
                {imgArray ? (
                  <ImageGallery items={imgArray} showNav={false} />
                ) : (
                  <ImageGallery items={images} showNav={false} />
                )}
              </div>
              <div className="flex-1 px-2">
                <div className="w-full text-gray-900 text-[18px] font-medium flex flex-row">
                  <h3>Common name :</h3>
                  {plant ? <h3>&nbsp;{plant.common_name}</h3> : null}
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
      {/*isPlantFound ? <ViewTracker id={plantId} /> : null*/}
    </>
  );
};

export default Plant;
