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
        <div className="w-[60%] h-full">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-[64px] font-extrabold leading-tight shadow-sm mb-4 -mt-[150px]">
              Growing Knowledge,
              <br />
              Harvesting Success.
            </h2>
            <h4 className="text-[16px] text-justify leading-tight w-[90%] mb-10">
              Plantpedia: A green paradise for plant lovers. Explore, learn, and
              share your passion for plants. From gardeners to botanists, from
              hobbyists to experts, Plantpedia has something for everyone.
              Whether you want to identify a plant, get tips on how to grow it,
              or discover its medicinal or culinary uses, Plantpedia has you
              covered. You can also join our vibrant community of plant
              enthusiasts, where you can ask questions, share your experiences,
              and learn from others. Plantpedia is more than just a website,
              it’s a way of life. Join us today and start your journey into the
              wonderful world of plants.
            </h4>
            <div>
              <button
                type="button"
                className="hidden sm:flex items-center w-[400px] text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-600"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none text-slate-300 dark:text-slate-400"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
                <span className="flex-auto">Quick search...</span>
                <kbd className="font-sans font-semibold dark:text-slate-500">
                  <abbr
                    title="Control"
                    className="no-underline text-slate-300 dark:text-slate-500"
                  >
                    Ctrl{" "}
                  </abbr>{" "}
                  K
                </kbd>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* The search overlay */}
      <div ref={overlayRef} className="overlay">
        <button className="close-button" onClick={closeSearch}>
          &times;
        </button>
        <div className="overlay-content">
          <form>
            <input
              type="search"
              placeholder="Search KindaCode.com..."
              className="search-input"
            />
            <button
              className="search-button"
              onClick={() => {
                console.log("Hi there");
                /* Your search logic here */
              }}
            >
              Go
            </button>
            <p className="search-text">
              Enter your keyword into the search box
            </p>
          </form>
        </div>
      </div>

      <section className="h-[100vh] w-[100vw] px-[100px]"></section>
    </>
  );
};

export default Home;
