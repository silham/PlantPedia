import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import { SideSearchBtn } from "../components/SearchBtns";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-screen bg-slate-100 ">
        <header className="py-2 fixed z-20 top-0 left-0 flex flex-row justify-between items-center w-full px-[100px] bg-slate-50 shadow-lg">
          <div className="h-full flex items-center justify-center">
            <Image src="/plantpedia.png" width={200} height={90} alt="logo" />
          </div>
          <nav className="flex justify-between text-[16px] font-semibold text-gray-900 w-[25%]">
            <Link href="/plants">Plants</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about#">About</Link>
          </nav>
        </header>
        {children}
      </div>
      <footer className="w-[100vw]">
        <Footer />
      </footer>
      <Chat />
      <SideSearchBtn isHome={false} />
      {/*isPlantFound ? <ViewTracker id={plantId} /> : null*/}
    </>
  );
};

export default layout;
