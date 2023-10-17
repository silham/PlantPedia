import Image from "next/image";
const Home = () => {
  return (
    <>
      <section className='h-[100vh] w-[100vw] px-[100px] bg-[url("/hero-bg.png")] bg-cover'>
        <header className="h-[10vh] w-full flex justify-between py-2">
          <div>
            <Image src="/plantpedia.png" width={200} height={90} alt="logo" />
          </div>
        </header>
      </section>
      <section className="h-[100vh] w-[100vw] px-[100px]"></section>
    </>
  );
};

export default Home;