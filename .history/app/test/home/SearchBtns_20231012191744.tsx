"use client";
import SearchBox from "@/app/components/SearchBox";
import { useEffect, useRef } from "react";
import "./styles.css";

export const MainSearchBtn: React.FC = () => {
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
        </button>
      </div>
      {/* The search overlay */}
      <div
        ref={overlayRef}
        className="flex h-[100vh] max-h-[100vh] w-0 fixed top-0 left-0 bg-black bg-opacity-90 duration-500 overflow-hidden z-10 "
      >
        <button
          className="absolute top-[20px] right-10 text-[60px] border-none bg-transparent cursor-pointer text-white"
          onClick={closeSearch}
        >
          &times;
        </button>
        <div className="relative top-[15%] w-full text-center mt-[30px] ">
          <SearchBox
            props={{
              n: 8,
              content: "",
              className:
                "relative w-[88%] flex justify-between items-center mx-[80px] rounded-full bg-[#EEF5B1] text-black",
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

export const SideSearchBtn: React.FC = () => {
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
  useEffect(() => {
    const handleScroll = () => {
      const sideSearchBtn = document.getElementById("sideSearchBtn");
      var vh = window.innerHeight;
      var scrollHeight = window.scrollY;
      if (
        scrollHeight < vh * 0.2 &&
        sideSearchBtn?.classList.contains("animate-sideSearchBtn-in")
      ) {
        sideSearchBtn.classList.remove("animate-sideSearchBtn-in");
        sideSearchBtn.classList.add("animate-sideSearchBtn-out");
      }
      if (scrollHeight >= vh * 0.2) {
        sideSearchBtn?.classList.remove("animate-sideSearchBtn-out");
        sideSearchBtn?.classList.add("animate-sideSearchBtn-in");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      <div
        id="sideSearchBtn"
        className="fixed bottom-[60px] right-0 opacity-0 rounded-full bg-custom-blue-green shadow-xl shadow-black border border-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
        onClick={openSearch}
      >
        <i className="text-[24px] text-white ri-search-2-line"></i>
      </div>
      {/* The search overlay */}
      <div
        ref={overlayRef}
        className="flex h-[100vh] max-h-[100vh] w-0 fixed top-0 left-0 bg-black bg-opacity-90 duration-500 overflow-hidden z-10 "
      >
        <button
          className="absolute top-[20px] right-10 text-[60px] border-none bg-transparent cursor-pointer text-white"
          onClick={closeSearch}
        >
          &times;
        </button>
        <div className="relative top-[15%] w-full text-center mt-[30px] ">
          <SearchBox
            props={{
              n: 8,
              content: "",
              className:
                "relative w-[88%] flex justify-between items-center mx-[80px] rounded-full bg-[#EEF5B1] text-black",
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
