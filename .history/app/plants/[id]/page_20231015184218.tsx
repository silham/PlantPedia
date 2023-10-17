"use client";
import { Navbar } from "@/app/components/Nav";
import { useEffect, useState } from "react";
interface Props {
  params: { id: string };
}

const Plant = ({ params: { id } }: Props) => {
  const [viewAdded, setViewAdded] = useState(false);
  const s_name = id.replace(/-/g, " ");
  const viewsId = id.replace(/-/g, "_");

  useEffect(() => {
    if (!viewAdded) {
      async () => {
        const data = await fetch(`/api/views?id=${id}`);
        await console.log(data);
      };
      console.log("updateViews called");
      setViewAdded(true);
    }
  }, []);

  return <div className="first-letter:capitalize">{s_name}</div>;
};

export default Plant;
