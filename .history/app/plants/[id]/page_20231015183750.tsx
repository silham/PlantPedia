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
      const fetchData = () async => {const data = await fetch()};
      console.log("updateViews called");
      setViewAdded(true);
    }
  }, []);

  return <div className="first-letter:capitalize">{s_name}</div>;
};

export default Plant;
