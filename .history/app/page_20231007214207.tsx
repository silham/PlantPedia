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
            <h1 className="text-[24px] text-[#EEF5B1] text-center font-semibold">
              Growing knowledge, harvesting success with
              <br />
              <span className="text-[40px]">Agro Finder</span>
            </h1>
          </div>
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
        <div className="w-full flex justify-center items-center py-8">
          <h2 className="text-[#EEF5B1] text-[36px] font-semibold">
            - Trending Topics -
          </h2>
        </div>
        <div className="w-full h-full flex flow-row">
          <fieldset name="Plants">
            <legend>a</legend>
            <h1>a</h1>
          </fieldset>
        </div>
      </section>
    </>
  );
}
