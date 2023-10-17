import Image from "next/image";
import Link from "next/link";
import SearchBox from "./components/SearchBox";
import "./styles.css";
import CountUpClient from "./components/CountUpClient";

export default function Home() {
  return (
    <>
      <section className="w-full px-[100px] h-[100vh] hero_bg_gradient">
        <header className="h-[80px] flex flex-row justify-between items-center">
          <div>
            <Image src="/logo.png" alt="logo" width={140} height={80} />
          </div>
          <div>
            <ul className="list-none h-full flex items-center">
              <li className="inline mr-[40px] text-[#F9F9F9] text-[18px] cursor-pointer">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="inline mr-[40px] text-[#F9F9F9] text-[18px] cursor-pointer">
                Donate
              </li>
              <li className="inline mr-[40px] text-[#F9F9F9] text-[18px] cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="inline text-[#F9F9F9] text-[18px] cursor-pointer">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="w-full flex flex-col justify-between min-h-[calc(100vh-80px)] items-center">
          <div className="w-full mt-[50px]">
            <h1 className="heading-txt text-[50px] text-[#EEF5B1] text-center font-semibold">
              Growing knowledge, harvesting success
              <br /> with
              <span className="font-bold"> Plantpedia</span>
            </h1>
          </div>
          <button
            type="button"
            className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
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
          <div className="mb-[100px] w-[80%] flex flex-row justify-between px-[80px]">
            <div className="">
              <CountUpClient end={3000} />
              <h4 className="-mt-[10px]">Plants</h4>
            </div>
            <div className="">
              <CountUpClient end={1500} />
              <h4 className="-mt-[10px]">Diseases</h4>
            </div>
            <div className="">
              <CountUpClient end={1000} />
              <h4 className="-mt-[10px]">Solutions</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-[100px] bg-[#1b4001] h-[100vh]">
        <div className="w-full flex justify-center items-center h-[10%]">
          <h2 className="text-[#EEF5B1] text-[36px] font-semibold">
            - Trending Topics -
          </h2>
        </div>
        <div className="w-full flex flex-col h-[90%]">
          <div className="w-full flex-[1]">
            <fieldset className="border border-solid border-[#EEF5B1] p-3 rounded-md h-full">
              <legend className="text-[20px] text-[#EEF5B1] px-1 font-semibold">
                Plants
              </legend>
              <h1>a</h1>
            </fieldset>
          </div>
          <div className="w-full flex flex-row flex-[1]">
            <div className="w-[50%] h-full p-1">
              <fieldset className="border border-solid border-[#EEF5B1] p-3 rounded-md h-full">
                <legend className="text-[20px] text-[#EEF5B1] px-1 font-semibold">
                  Pests
                </legend>
                <h1>a</h1>
              </fieldset>
            </div>
            <div className="w-[50%] h-full p-1">
              <fieldset className="border border-solid border-[#EEF5B1] p-3 rounded-md h-full">
                <legend className="text-[20px] text-[#EEF5B1] px-1 font-semibold">
                  Blights
                </legend>
                <h1>a</h1>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}