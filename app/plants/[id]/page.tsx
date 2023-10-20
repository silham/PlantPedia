"use client";
import { useEffect, useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import Loader from "./Loader";
import ViewTracker from "@/app/utils/TrackViews";
import { notFound } from "next/navigation";
interface Props {
  params: { id: string };
}

interface Taxonomy {
  id: string;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
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
  taxonomy: Taxonomy;
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
      } else if (plant == null) {
        notFound();
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
          <div className="w-full flex flex-row px-[100px] mb-4">
            <div className="flex-1">
              {imgArray && imgArray?.length > 0 ? (
                <ImageGallery items={imgArray} showNav={false} />
              ) : (
                <ImageGallery items={images} showNav={false} />
              )}
            </div>
            <div className="flex-1 px-4">
              <div className="w-full text-gray-900 text-[16px] text-justify font-medium flex flex-row">
                <p>{plant.description}</p>
              </div>
              {plant.synonyms.length > 0 ? (
                <div className="text-gray-800 text-[16px] flex flex-row mt-4 font-medium">
                  <p>
                    &#x25C9;&nbsp;
                    <span className="font-bold text-gray-900">Synonyms : </span>
                    {plant.synonyms.map((synonym, index) => {
                      if (index != plant.synonyms.length - 1) {
                        return synonym + ", ";
                      } else {
                        return synonym;
                      }
                    })}
                  </p>
                </div>
              ) : null}
              {(plant.min_h || plant.max_h) && (
                <div className="text-gray-800 text-[16px] flex flex-row mt-4 font-medium">
                  <p>
                    &#x25C9;&nbsp;
                    <span className="font-bold text-gray-900">
                      Average height :{" "}
                    </span>
                    {plant.min_h && plant.max_h
                      ? plant.min_h / 100 + "m ~ " + plant.max_h / 100 + "m"
                      : plant.min_h / 100 || plant.max_h / 100 + "m"}
                  </p>
                </div>
              )}
              {(plant.min_temp || plant.max_temp) && (
                <div className="text-gray-800 text-[16px] flex flex-row mt-4 font-medium">
                  <p>
                    &#x25C9;&nbsp;
                    <span className="font-bold text-gray-900">
                      Suitable temperature :{" "}
                    </span>
                    {plant.min_temp && plant.max_temp
                      ? plant.min_temp + "°C ~ " + plant.max_temp + "°C"
                      : plant.min_temp || plant.max_temp + "°C"}
                  </p>
                </div>
              )}
              {(plant.min_ph || plant.max_ph) && (
                <div className="text-gray-800 text-[16px] flex flex-row mt-4 font-medium">
                  <p>
                    &#x25C9;&nbsp;
                    <span className="font-bold text-gray-900">
                      Suitable pH range :{" "}
                    </span>
                    {plant.min_ph && plant.max_temp
                      ? plant.min_ph + " ~ " + plant.max_ph
                      : plant.min_ph || plant.max_ph}
                  </p>
                </div>
              )}
              <div className="text-gray-800 text-[16px] flex flex-row mt-4 font-medium">
                <p>
                  &#x25C9;&nbsp;
                  <span className="font-bold text-gray-900">
                    Water requirement :{" "}
                  </span>
                  {plant.water == "L"
                    ? "Low"
                    : plant.water == "M"
                    ? "Medium"
                    : "High"}
                </p>
              </div>
              <div className="text-gray-800 text-[16px] flex flex-row mt-4 font-medium">
                <p>
                  &#x25C9;&nbsp;
                  <span className="font-bold text-gray-900">
                    Growth habit :{" "}
                  </span>
                  {plant.habit}
                </p>
              </div>
              <div className=" flex flex-row mt-4 ">
                <p className="text-gray-800 text-[16px] font-bold">
                  <span className="font-medium">&#x25C9;&nbsp;</span>Taxonomy :
                </p>
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-3 mt-2">
                <table className="w-full text-sm text-left text-gray-700 ">
                  <tbody>
                    <tr className="bg-gray-300 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Kingdom
                      </th>
                      <td className="px-6 py-4">{plant.taxonomy.kingdom}</td>
                    </tr>
                    <tr className="border-b bg-gray-200 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Phylum
                      </th>
                      <td className="px-6 py-4">{plant.taxonomy.phylum}</td>
                    </tr>
                    <tr className="bg-gray-300 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Class
                      </th>
                      <td className="px-6 py-4">{plant.taxonomy.class}</td>
                    </tr>
                    <tr className="border-b bg-gray-200 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Order
                      </th>
                      <td className="px-6 py-4">{plant.taxonomy.order}</td>
                    </tr>
                    <tr className="bg-gray-300 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Family
                      </th>
                      <td className="px-6 py-4">{plant.taxonomy.family}</td>
                    </tr>
                    <tr className="border-b bg-gray-200 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Genus
                      </th>
                      <td className="px-6 py-4">{plant.taxonomy.genus}</td>
                    </tr>
                    <tr className="bg-gray-300 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Species
                      </th>
                      <td className="px-6 py-4">{plant.taxonomy.species}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {(plant.britannica || plant.wikipedia) && (
                <div className="text-gray-800 text-[16px] flex flex-row mt-4 font-medium">
                  &#x25C9;&nbsp;
                  <span className="font-bold text-gray-900">
                    Read further :{" "}
                  </span>
                  <div className="flex flex-col ml-2 text-blue-900">
                    {plant.wikipedia && (
                      <a href={plant.wikipedia} target="_blank">
                        Wikipedia <i className="ri-external-link-line"></i>
                      </a>
                    )}
                    {plant.britannica && (
                      <a href={plant.britannica} target="_blank">
                        Britannica <i className="ri-external-link-line"></i>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {isPlantFound ? <ViewTracker id={plantId} /> : null}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Plant;
