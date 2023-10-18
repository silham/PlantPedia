/* eslint-disable @next/next/no-img-element */
import UrlGen from "@/app/utils/SlugGen";
import TextShorter from "@/app/utils/TextShorter";
import Link from "next/link";
import Image from "next/image";

interface Props {
  props: {
    plantName: string;
    dsc: string;
    img: string;
    scf_name: string;
    imgW: number;
  };
}

const PlantCard = ({ props }: Props) => {
  return (
    <div className="w-[25%] p-3">
      <Link href={UrlGen("plants", props.scf_name)}>
        <div className="w-full h-64 bg-[#9AEB59] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 duration-150 ease-in-out">
          <div className="w-full h-1/2 bg-amber-700 object-contain">
            <Image
              src={`https://ik.imagekit.io/shakil/agro_finder/tr:w-${props.imgW},h-128/${props.img}`}
              alt={props.img}
              className="h-full w-full"
              width={props.imgW}
              height={128}
            />
          </div>
          <div className="w-full h-1/2 px-2">
            <h4
              className="text-gray-800 font-black text-[26px]"
              title={props.plantName}
            >
              {TextShorter(props.plantName, 14)}
            </h4>
            <p className="text-gray-900 font-medium text-[14px] text-justify">
              {TextShorter(props.dsc, 140)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;
