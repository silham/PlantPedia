"use client";
import { useEffect, useState } from "react";
import Loader from "./[id]/Loader";
import Link from "next/link";
import UrlGen from "../utils/SlugGen";

interface Plant {
  common_name: string;
  scientific_name: string;
  synonyms: string[];
}

const Page = () => {
  const [plants, setPlants] = useState<Plant[]>();

  useEffect(() => {
    const fetchPlants = async () => {
      const res = await fetch(`/api/plants`);
      const data: Plant[] = await res.json();
      setPlants(data);
    };
    fetchPlants();
  });
  return (
    <div className="min-h-screen -mt-16 w-screen px-[100px]">
      {plants ? (
        <>
          <div className=" w-full flex pt-20 flex-row text-gray-900 font-black text-[32px] min-h-160px py-3 justify-center">
            <h1>Explore all indexed Plants</h1>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-8">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Plant Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Scientific name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Synonyms
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {plants.map((plant, index) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 ? "bg-gray-300" : "bg-gray-200"
                      } border-b `}
                    >
                      <Link href={UrlGen("plants", plant.scientific_name)}>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {plant.common_name}
                        </th>
                      </Link>
                      <td className="px-6 py-4 italic">
                        {plant.scientific_name}
                      </td>
                      <td className="px-6 py-4">
                        {plant.synonyms.map((synonym, index) => {
                          if (index != plant.synonyms.length - 1) {
                            return synonym + ", ";
                          } else {
                            return synonym;
                          }
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Page;
