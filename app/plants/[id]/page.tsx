"use client";
import { Navbar } from "@/app/components/Nav";
import { useEffect, useState, useRef } from "react";
import ViewTracker from "@/app/utils/TrackViews";
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
  const isInitialized = useRef<boolean>(false);
  const isPlantFound = useRef<boolean>(false);
  const s_name = id.replace(/-/g, " ");
  const plantId = id.replace(/-/g, "_");

  useEffect(() => {
    if (!isInitialized.current) {
      const fetchPlant = async () => {
        const res = await fetch(`api/plants/${plantId}`);
        const data: Plant = await res.json();
        setPlant(data);
        if (plant?.id == plantId) {
          isPlantFound.current = true;
        }
      };
      fetchPlant();
    }
  });

  return (
    <>
      <div className="first-letter:capitalize">
        {plant && plant.common_name}
      </div>
      {/*isPlantFound ? <ViewTracker id={plantId} /> : null*/}
    </>
  );
};

export default Plant;
