"use client";
import { Navbar } from "@/app/components/Nav";
import ViewTracker from "@/app/utils/TrackViews";
interface Props {
  params: { id: string };
}

const Plant = ({ params: { id } }: Props) => {
  const s_name = id.replace(/-/g, " ");
  const viewsId = id.replace(/-/g, "_");

  return (
    <>
      <div className="first-letter:capitalize">{s_name}</div>
      <ViewTracker id={viewsId} />
    </>
  );
};

export default Plant;
