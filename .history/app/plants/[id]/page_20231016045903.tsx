"use client";
import { Navbar } from "@/app/components/Nav";
import { useEffect, useState } from "react";
import ViewTracker from "@/app/utils/TrackViews";
interface Props {
  params: { id: string };
}

const Plant = ({ params: { id } }: Props) => {
  const [viewAdded, setViewAdded] = useState(false);
  const s_name = id.replace(/-/g, " ");
  const viewsId = id.replace(/-/g, "_");

  /*useEffect(() => {
    if (!viewAdded) {
      async () => {
        console.log(await fetch(`/api/views?id=${viewsId}`));
      };
      console.log("updateViews called");
      setViewAdded(true);
    }
  }, [viewsId, viewAdded]);*/

  return (
    <>
      <div className="first-letter:capitalize">{s_name}</div>
      <ViewTracker id={viewsId} />
    </>
  );
};

export default Plant;
