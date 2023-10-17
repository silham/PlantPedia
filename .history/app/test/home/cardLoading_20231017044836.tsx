import React from "react";

const cardLoading = () => {
  return (
    <div className="w-[25%] p-3">
      <div className="w-full h-64 bg-[#9AEB59] rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 duration-150 ease-in-out">
        <div className="w-full h-1/2 object-contain"></div>
        <div className="w-full h-1/2 px-2">
          <h5 className="text-gray-800 font-black text-[26px]"></h5>
          <p className="text-gray-900 font-medium text-[14px] text-justify"></p>
        </div>
      </div>
    </div>
  );
};

export default cardLoading;
