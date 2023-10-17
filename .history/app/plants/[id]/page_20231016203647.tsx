import { Navbar } from "@/app/components/Nav";
import { useEffect, useState, useRef } from "react";
import ViewTracker from "@/app/utils/TrackViews";
interface Props {
  params: { id: string };
}

const Plant = ({ params: { id } }: Props) => {
  const isInitialized = useRef<boolean>(false);
  const isPlantFound = useRef<boolean>(false);
  const s_name = id.replace(/-/g, " ");
  const viewsId = id.replace(/-/g, "_");

  return (
    <>
      <div className="first-letter:capitalize">{s_name}</div>
      {isPlantFound ? <ViewTracker id={viewsId} /> : null}
    </>
  );
};

export default Plant;
