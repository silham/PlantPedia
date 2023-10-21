import Image from "next/image";
import Link from "next/link";
import { MainSearchBtn, SideSearchBtn } from "./components/SearchBtns";
import PlantOfDay from "./PlantOfDay";
import Chat from "./components/Chat/Chat";
import TrendingTopics from "./TrendingTopics";
import ContactUs from "./Contact";
import AgroAI from "./AgroAI";
import About from "./About";
import Footer from "./components/Footer";
import { Navbar } from "./Nav";

const Home = () => {
  return (
    <>
      <section className="h-[100vh] w-[100vw] px-[100px] bg-[url(/hero-bg.webp)] bg-cover text-white">
        <Navbar />
        <div className="w-[60%] h-full">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-[64px] font-extrabold leading-tight shadow-sm mb-4 -mt-[150px]">
              Growing Knowledge,
              <br />
              Harvesting Success.
            </h2>
            <h3 className="text-[16px] text-justify leading-tight w-[90%] mb-10 font-medium">
              Plantpedia: A green paradise for plant lovers. Explore, learn, and
              share your passion for plants. From gardeners to botanists, from
              hobbyists to experts, Plantpedia has something for everyone.
              Whether you want to identify a plant, get tips on how to grow it,
              or discover its medicinal or culinary uses, Plantpedia has you
              covered. Plantpedia is more than just a website, it’s a way of
              life.
            </h3>
            <MainSearchBtn />
          </div>
        </div>
      </section>

      <section className="w-[100vw] px-[180px]">
        <PlantOfDay />
      </section>

      <section className="w-[100vw] px-[100px]">
        <TrendingTopics />
      </section>

      <section className="w-[100vw] px-[180px]">
        <AgroAI />
      </section>

      <section className="w-[100vw] px-[180px]" id="about">
        <About />
      </section>

      <section className="w-[100vw] px-[180px]" id="contact">
        <ContactUs />
      </section>

      <footer className="w-[100vw]">
        <Footer />
      </footer>

      <SideSearchBtn isHome={true} />
      <Chat />
    </>
  );
};

export default Home;
