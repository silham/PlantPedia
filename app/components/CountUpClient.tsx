"use client";

import CountUp from "react-countup";

interface Props {
  end: number;
}

const CountUpClient = ({ end }: Props) => {
  return (
    <>
      <CountUp end={end} suffix="+" className="text-[28px] font-semibold" />
    </>
  );
};

export default CountUpClient;
