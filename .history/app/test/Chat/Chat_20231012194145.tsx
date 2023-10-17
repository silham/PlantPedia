"use client";
import { useState, useRef } from "react";

const Chat = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="fixed right-[60px] bottom-[130px] w-[50px] h-[50px] cursor-pointer bg-custom-blue-green rounded-full flex items-center justify-center shadow-xl z-[1] "
      >
        <i
          className={`${
            toggle ? "ri-close-line" : "ri-message-3-fill"
          } text-white text-[30px]`}
        ></i>
      </div>
    </>
  );
};

export default Chat;
