"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const Chat = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsToggled(!isToggled);
        }}
        className="fixed right-[60px] bottom-[115px] w-[50px] h-[50px] cursor-pointer bg-custom-blue-green rounded-full flex items-center justify-center shadow-xl z-[1] "
      >
        <i
          className={`${
            isToggled ? "ri-close-line" : "ri-chat-3-fill"
          } text-white text-[30px]`}
        ></i>
      </div>
      {isToggled ? (
        <div className="p-1 flex-col drop-shadow-2xl shadow-2xl fixed bottom-[170px] right-[85px] w-[300px] h-[65vh] bg-white rounded-xl flex overflow-hidden">
          <div className="flex w-full h-[20%] bg-custom-blue-green rounded-xl">
            <Image
              src="/plant-pal.webp"
              width={100}
              height={100}
              alt="Plant Pal"
            />
            <div className="h-full flex items-center flex-col">
              <h4 className="text-[22px] text-white font-bold leading-tight">
                Plant Pal
              </h4>
              <h5 className="text-[18px] text-white font-semibold leading-tight -mt-1">
                your agri assistant
              </h5>
            </div>
          </div>
          <div className="flex flex-grow"></div>
          <div className="flex w-full h-[8%]">
            <input className="pl-1 text-[14px] border-2 border-gray-600 h-full rounded-lg flex-grow" />
            <button className="w-[16%] h-full bg-custom-blue-green ml-1 flex items-center justify-center rounded-lg">
              <i className="ri-send-plane-2-fill text-white text-[28px]"></i>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Chat;
