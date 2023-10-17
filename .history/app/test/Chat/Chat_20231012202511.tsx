"use client";
import { useState, useRef } from "react";

const Chat = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsToggled(!isToggled);
        }}
        className="fixed right-[60px] bottom-[115px] w-[50px] h-[50px] cursor-pointer bg-custom-blue-green rounded-full flex items-center justify-center shadow-xl z-[1] "
      >
        <i
          className={`${
            isToggled ? "ri-close-line" : "ri-chat-3-fill"
          } text-white text-[30px]`}
        ></i>
      </div>
      {isToggled ? (
        <div className="fixed bottom-[170px] right-[85px] w-[300px] h-[65vh] bg-white rounded-xl flex">
          <div className="flex "></div>
          <div></div>
        </div>
      ) : null}
    </>
  );
};

export default Chat;
