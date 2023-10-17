/* eslint-disable @next/next/no-img-element */
import UrlGen from "@/app/utils/SlugGen";
import TextShorter from "@/app/utils/TextShorter";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  props: {
    plantName: string;
    dsc: string;
    img: string;
    scf_name: string;
  };
}

const PlantCard = ({ props }: Props) => {
  return (
    <div className="w-[25%] p-3">
      <Link href={UrlGen("plant", props.scf_name)}>
        <div className="w-full h-64 bg-[#9AEB59] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 duration-150 ease-in-out">
          <div className="w-full h-1/2 bg-amber-700 object-contain">
            <img
              src={`https://ik.imagekit.io/shakil/agro_finder/tr:w-256,h-128/${props.img}`}
              alt={props.img}
              className="h-full w-full"
            />
          </div>
          <div className="w-full h-1/2 px-2">
            <h5 className="text-gray-800 font-black text-[30px]">
              {TextShorter(props.plantName, 14)}
            </h5>
            <p className="text-gray-900 font-medium text-[14px] text-justify">
              {TextShorter(props.dsc, 100)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;
