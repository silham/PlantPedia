'use client'

import CountUp from "react-countup"

const CountUpClient = () => {
  return (
    <><CountUp
                end={3000}
                suffix="+"
                className="text-[28px] font-semibold"
              /></>
  )
}

export default CountUpClient