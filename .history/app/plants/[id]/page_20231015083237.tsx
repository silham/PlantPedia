"use client";
import { Navbar } from "@/app/components/Nav";
import UpdateViews from "@/app/utils/UpdateViews";
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
      UpdateViews(viewsId);
      setViewAdded(true);
    }
  }, []);

  return <div className="first-letter:capitalize">{s_name}</div>;
};

export default Plant;
