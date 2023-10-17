"use client";
import SearchBox from "@/app/components/SearchBox";
import React from "react";
import { useRef } from "react";
import "./styles.css";

const MainSearchBtn = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // This function is called when the "Start Searching" button gets clicked
  const openSearch = () => {
    if (overlayRef.current) {
      overlayRef.current.style.width = "100%";
    }
  };

  // This function is called when the "Close" button is clicked
  const closeSearch = () => {
    if (overlayRef.current) {
      overlayRef.current.style.width = "0%";
    }
  };
  return (
    <>
      <div>
        <button
          onClick={openSearch}
          type="button"
          className="hidden sm:flex items-center w-[400px] text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-600"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-none text-slate-300 dark:text-slate-400"
            aria-hidden="true"
          >
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
          <span className="flex-auto">Quick search...</span>
          <kbd className="font-sans font-semibold dark:text-slate-500">
            <abbr
              title="Control"
              className="no-underline text-slate-300 dark:text-slate-500"
            >
              Ctrl{" "}
            </abbr>{" "}
            K
          </kbd>
        </button>
      </div>
      {/* The search overlay */}
      <div ref={overlayRef} className="overlay">
        <button className="close-button" onClick={closeSearch}>
          &times;
        </button>
        <div className="overlay-content">
          <SearchBox
            props={{
              n: 5,
              content: "",
              className:
                "relative w-[80%] flex justify-between items-center mx-[80px] rounded-full bg-[#EEF5B1] text-black",
              classNameUl:
                "absolute top-full left-0 right-0 z-10 bg-[#EEF5B1] rounded-lg shadow-lg overflow-hidden mt-[3px]",
              classNameLi: "border-b-[1px] border-gray-400",
              classNameLink:
                "px-4 py-2 hover:bg-gray-400 transition-colors flex flex-row justify-between items-center",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MainSearchBtn;
