import UrlGen from "@/app/utils/SlugGen";
import TextShorter from "@/app/utils/TextShorter";
import Link from "next/link";
import React from "react";

interface Props {
  props: {
    name: string;
    dsc: string;
    img: string;
    scf_name: string;
  };
}

const PlantCard = ({ props }: Props) => {
  return (
    <div className="w-[25%] p-3">
      <Link href={UrlGen("plant")}>
        <div className="w-full h-64 bg-[#9AEB59] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 duration-150 ease-in-out">
          <div className="w-full h-1/2 bg-amber-700"></div>
          <div className="w-full h-1/2 px-2">
            <h5 className="text-gray-800 font-black text-[30px]">
              {props.name}
            </h5>
            <p className="text-gray-900 font-medium text-[16px] text-justify">
              {TextShorter(props.dsc, 100)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;
