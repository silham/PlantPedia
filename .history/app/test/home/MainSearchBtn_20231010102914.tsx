import React from "react";

const MainSearchBtn = () => {
  return (
    <div>
      <button
        onClick={openSearch}
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
  );
};

export default MainSearchBtn;
