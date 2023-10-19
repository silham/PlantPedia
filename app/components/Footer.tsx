import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-16 text-[16px] text-gray-900 font-medium bg-slate-300 shadow-lg flex items-center justify-center">
      <p>
        Made by{" "}
        <a href="https://silham.github.io/" target="_blank">
          Shakil Ilham
        </a>{" "}
        for Harvard CS50
      </p>
    </div>
  );
};

export default Footer;
