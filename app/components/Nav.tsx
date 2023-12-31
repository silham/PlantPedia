"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-slate-50 shadow-lg lg:px-[100px] px-10">
        <Link href="/" className="inline-flex items-center p-2 mr-4 ">
          <div className="h-full flex items-center justify-center">
            <Image src="/plantpedia.png" width={200} height={90} alt="logo" />
          </div>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-custom-green rounded lg:hidden ml-auto text-gray-900 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*this div will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link
              href="/plants"
              className="lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-[16px] font-semibold text-gray-900 items-center justify-center hover:bg-custom-green hover:text-gray-900 "
            >
              Plants
            </Link>
            <Link
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-[16px] font-semibold text-gray-900 items-center justify-center hover:bg-custom-green hover:text-gray-900"
            >
              About us
            </Link>
            <Link
              href="/"
              className="lg:inline-flex lg:w-auto w-full pl-10 py-2 rounded text-[16px] font-semibold text-gray-900 items-center justify-center hover:bg-custom-green hover:text-gray-900"
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
