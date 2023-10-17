"use client";

import CountUp from "react-countup";

const CountUpClient = (end: number) => {
  return (
    <>
      <CountUp end={end} suffix="+" className="text-[28px] font-semibold" />
    </>
  );
};

export default CountUpClient;
