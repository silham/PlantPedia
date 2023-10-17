import Image from "next/image";
import Link from "next/link";
import "./styles.css";
const Home = () => {
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
        <div className="w-[60%]">
          <h2 className="text-[64px] font-extrabold leading-tight shadow-sm">
            Growing Knowledge,
            <br />
            Harvesting Success.
          </h2>
          <h4 className="text-[20px] text-justify leading-snug text-[18px]">
            Plantpedia: A green paradise for plant lovers. Explore, learn, and
            share your passion for plants. From gardeners to botanists, from
            hobbyists to experts, Plantpedia has something for everyone.
          </h4>
        </div>
      </section>
      <section className="h-[100vh] w-[100vw] px-[100px]"></section>
    </>
  );
};

export default Home;
