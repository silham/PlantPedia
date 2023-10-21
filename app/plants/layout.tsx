import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Chat from "../components/Chat/Chat";
import { SideSearchBtn } from "../components/SearchBtns";
import { Navbar } from "../components/Nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-screen bg-slate-100 ">
        <Navbar />
        {children}
      </div>
      <footer className="w-[100vw]">
        <Footer />
      </footer>
      <Chat />
      <SideSearchBtn isHome={false} />
    </>
  );
};

export default layout;
