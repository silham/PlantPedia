import Image from "next/image";
import Link from "next/link";
import SearchBox from "./components/SearchBox";
import "./styles.css";
import CountUpClient from "./components/CountUpClient";

export default function Home() {
  return (
    <>
      <section className="w-full max-h-[100vh] px-[100px] h-[100vh] hero_bg_gradient">
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
              <span className="text-[36px]">Agro Finder</span>
            </h1>
          </div>
          <SearchBox
            props={{
              n: 5,
              content: "",
              className:
                "relative w-[80%] flex justify-between items-center mx-[80px] rounded-full bg-[#EEF5B1]",
              classNameUl: "",
              classNameLi: "",
              classNameLink: "",
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
    </>
  );
}
