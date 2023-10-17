import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <section className='h-[100vh] w-[100vw] px-[100px] bg-[url("/hero-bg.png")] bg-cover'>
        <header className="h-[10vh] w-full flex justify-between py-2">
          <div className="h-full flex items-center justify-center">
            <Image src="/plantpedia.png" width={200} height={90} alt="logo" />
          </div>
          <nav className="flex justify-between text-[16px] font-semibold w-[30%]">
            <Link href="/plants">Plants</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about#">About</Link>
          </nav>
        </header>
      </section>
      <section className="h-[100vh] w-[100vw] px-[100px]"></section>
    </>
  );
};

export default Home;