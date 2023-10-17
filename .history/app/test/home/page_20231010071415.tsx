import Image from "next/image";
const Home = () => {
  return (
    <>
      <section className='h-[100vh] w-[100vw] px-[100px] bg-[url("/hero-bg.png")] bg-cover'>
        <header className="h-[10vh] w-full flex justify-between">
          <div>
            <Image src="/plantpedia.png" width={140} height={80} alt="logo" />
          </div>
        </header>
      </section>
      <section className="h-[100vh] w-[100vw] px-[100px]"></section>
    </>
  );
};

export default Home;
