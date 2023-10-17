"use client";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { useRef } from "react";
import SearchBox from "@/app/components/SearchBox";
const Home = () => {
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
      <section className="h-[100vh] w-[100vw] px-[100px] hero bg-cover text-white">
        <header className="h-[10vh] w-full flex justify-between py-2 items-center">
          <div className="h-full flex items-center justify-center">
            <Image src="/plantpedia.png" width={200} height={90} alt="logo" />
          </div>
          <nav className="flex justify-between text-[16px] font-semibold text-white w-[25%]">
            <Link href="/plants">Plants</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about#">About</Link>
          </nav>
        </header>
        <div className="w-[60%] h-full">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-[64px] font-extrabold leading-tight shadow-sm mb-4 -mt-[150px]">
              Growing Knowledge,
              <br />
              Harvesting Success.
            </h2>
            <h4 className="text-[16px] text-justify leading-tight w-[90%] mb-10">
              Plantpedia: A green paradise for plant lovers. Explore, learn, and
              share your passion for plants. From gardeners to botanists, from
              hobbyists to experts, Plantpedia has something for everyone.
              Whether you want to identify a plant, get tips on how to grow it,
              or discover its medicinal or culinary uses, Plantpedia has you
              covered. You can also join our vibrant community of plant
              enthusiasts, where you can ask questions, share your experiences,
              and learn from others. Plantpedia is more than just a website,
              it’s a way of life. Join us today and start your journey into the
              wonderful world of plants.
            </h4>
          </div>
        </div>
      </section>
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
                "relative w-[80%] flex justify-between items-center mx-[80px] rounded-full bg-[#EEF5B1]",
              classNameUl:
                "absolute top-full left-0 right-0 z-10 bg-[#EEF5B1] rounded-lg shadow-lg overflow-hidden mt-[3px]",
              classNameLi: "border-b-[1px] border-gray-400",
              classNameLink:
                "px-4 py-2 hover:bg-gray-400 transition-colors flex flex-row justify-between items-center",
            }}
          />
        </div>
      </div>

      <section className="h-[100vh] w-[100vw] px-[100px]"></section>
    </>
  );
};

export default Home;
