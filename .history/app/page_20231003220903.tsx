import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="w-full max-h-[100vh] px-[100px] h-[100vh] hero_bg_gradient">
        <header className="h-[80px] flex flex-row justify-between items-center">
          <div>
            <img src="logo.png" alt="logo" />
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
          {/**<div className="w-[80%] flex justify-between items-center mx-[80px] rounded-full bg-[#EEF5B1]">
            <input
              type="text"
              spellCheck="false"
              placeholder="Search for plants, plant disease and solutions..."
              className="w-[95%] h-[40px] focus:outline-none px-[15px] bg-transparent"
              maxLength={200}
            />
            <i className="text-[24px] ri-search-2-line mr-[10px]"></i>
  </div>**/}
          <SearchBox
            n={5}
            content=""
            className="relative w-[80%] flex justify-between items-center mx-[80px] rounded-full bg-[#EEF5B1]"
            classNameUl="absolute top-full left-0 right-0 z-10 bg-[#EEF5B1] rounded-lg shadow-lg overflow-hidden mt-[3px]"
            classNameLi="border-b-[1px] border-gray-400"
            classNameLink="px-4 py-2 hover:bg-gray-400 transition-colors flex flex-row justify-between items-center"
          />
          <div className="mb-[100px] w-[80%] flex flex-row justify-between px-[80px]">
            <div className="">
              <CountUp
                end={3000}
                suffix="+"
                className="text-[28px] font-semibold"
              />
              <h4 className="-mt-[10px]">Plants</h4>
            </div>
            <div className="">
              <CountUp
                end={1500}
                suffix="+"
                className="text-[28px] font-semibold"
              />
              <h4 className="-mt-[10px]">Diseases</h4>
            </div>
            <div className="">
              <CountUp
                end={1000}
                suffix="+"
                className="text-[28px] font-semibold"
              />
              <h4 className="-mt-[10px]">Solutions</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
