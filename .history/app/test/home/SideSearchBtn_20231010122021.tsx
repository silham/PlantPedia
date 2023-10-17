import React from "react";
import MainSearchBtn from "./MainSearchBtn";

const SideSearchBtn = () => {
  window.addEventListener("scroll", function () {
    var vh = window.innerHeight;
    var scrollHeight = window.scrollY;
    if (scrollHeight >= vh * 0.8) {
    }
  });

  return (
    <div className="fixed bottom-[60px] right-[80px] rounded-full bg-custom-blue-green shadow-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
      <i className="text-[24px] text-white ri-search-2-line"></i>
    </div>
  );
};

export default SideSearchBtn;
