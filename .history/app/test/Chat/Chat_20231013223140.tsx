"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./style.css";
import Formatter from "@/app/utils/Formatter";
import 

interface Messages {
  author: string;
  content: string;
}

const Chat = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [messages, setMessages] = useState<Messages[]>([]);
  const [isGettingMsg, setIsGettingMsg] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isGettingMsg) {
      console.log(messages);
      fetch(
        "https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage?key=AIzaSyB7E6ela5BzmhRGnUqapTzw3tlpGM2d_G0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: {
              context:
                "You are Plant Pal, a friendly AI assistant for agriculture. You have a lot of experience in agriculture. Also you have power to search data across the Internet. You love to reply short and informative way",
              examples: [
                {
                  input: {
                    content: "Hi",
                  },
                  output: {
                    content: "Hello! Plant Pal here. How can I help you today?",
                  },
                },
                {
                  input: {
                    content:
                      "I wanna know more about rice plant. can you help me with that?",
                  },
                  output: {
                    content:
                      "Rice is a grass that is cultivated as a cereal crop. It is the most widely consumed staple food for a large part of the world'''s human population, especially in Asia. It is the agricultural commodity with the third-highest worldwide production, after sugarcane and maize. Rice is the most important staple food for over half of the world'''s population, more than 3.5 billion people. It is also the agricultural commodity with the third-highest worldwide production, after sugarcane and maize.\n\nRice is a member of the grass family Poaceae. It is a semiaquatic plant that grows in flooded fields. The rice plant has a long, slender stem that grows up to 1 meter tall. The leaves are long and narrow, and the flowers are small and white. The rice grain is a small, round seed that is enclosed in a husk.\n\nRice is a tropical plant that grows best in warm, humid climates. It is grown in over 100 countries around the world, but the majority of the world'''s rice is grown in Asia. China, India, and Indonesia are the world'''s largest producers of rice.\n\nRice is a versatile crop that can be grown in a variety of soils. It is also a relatively low-input crop, requiring less fertilizer and pesticides than other cereal crops. Rice is a good source of carbohydrates, protein, and fiber. It is also a good source of vitamins and minerals, including thiamin, niacin, iron, and magnesium.\n\nRice is a staple food for many people around the world. It is a versatile crop that can be cooked in a variety of ways. Rice is also a good source of carbohydrates, protein, and fiber.",
                  },
                },
              ],
              messages: messages,
            },
            temperature: 0.25,
            top_k: 40,
            top_p: 0.95,
            candidate_count: 1,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setIsGettingMsg(false);
          setMessages([...messages, data.candidates[0]]);
        })
        .catch((error) => console.error(error));
      setInputValue("");
    }
  }, [isGettingMsg, messages]);

  useEffect(() => {
    if (lastMessageElement) {
      lastMessageElement.scrollIntoView();
    }
  }, [messages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const sendMsg = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { author: "0", content: inputValue }]);
      setIsGettingMsg(true);
      if (lastMessageElement) {
        lastMessageElement.scrollIntoView();
      }
    }
  };
  const lastMessageIndex = messages.length - 1;
  const lastMessageElement = lastMessageRef.current;
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
        <div className="p-1 flex-col drop-shadow-2xl shadow-2xl fixed bottom-[170px] right-[85px] w-[320px] h-[65vh] bg-white rounded-xl flex overflow-hidden">
          <div className="flex w-full h-[20%] bg-custom-blue-green rounded-xl">
            <Image
              src="/plant-pal.webp"
              width={100}
              height={100}
              alt="Plant Pal"
            />
            <div className="h-full flex justify-center flex-col">
              <h4 className="text-[22px] text-white font-bold leading-tight">
                Plant Pal
              </h4>
              <h5 className="text-[18px] text-white font-semibold leading-tight -mt-1">
                your agri assistant
              </h5>
            </div>
          </div>
          <div className="flex flex-grow max-h-[72%] flex-col pb-2">
            <div className="h-full w-full overflow-y-scroll scrollable-div">
              <div className="my-2 flex  justify-start">
                <p className=" text-[14px] leading-tight px-1 py-2 bg-green-300 rounded-t-lg rounded-br-lg rounded-bl-none max-w-[85%]">
                  Hello! I&apos;m Plant Pal. Your agri assistant. How can I help
                  you today?
                </p>
              </div>
              {messages.length > 0
                ? messages.map((message, index) => {
                    return (
                      <div
                        ref={index === lastMessageIndex ? lastMessageRef : null}
                        className={`my-2 flex ${
                          message.author == "0"
                            ? "justify-end"
                            : "justify-start"
                        } ${
                          message.author == "1" && index === lastMessageIndex
                            ? "last-message"
                            : null
                        }`}
                        key={index}
                      >
                        <p
                          className={`text-[14px] leading-tight px-1 py-2 ${
                            message.author == "0"
                              ? "bg-blue-300 rounded-bl-lg rounded-br-none"
                              : "bg-green-300 rounded-bl-none rounded-br-lg"
                          } rounded-t-lg max-w-[85%] min-w-[25px]`}
                        >
                          {Formatter(message.content)}
                        </p>
                      </div>
                    );
                  })
                : null}
              {isGettingMsg ? (
                <div className="my-2 flex  justify-start">
                  <div className="flex justify-center px-1 py-2 bg-green-300 rounded-t-lg rounded-br-lg rounded-bl-none">
                    <span className="circle animate-loader"></span>
                    <span className="circle animate-loader animation-delay-200"></span>
                    <span className="circle animate-loader animation-delay-400"></span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex w-full h-[8%]">
            <input
              ref={inputRef}
              id="input"
              className="pl-1 text-[14px] border-2 border-custom-blue-green h-full rounded-lg flex-grow placeholder:text-gray-500 placeholder:font-medium"
              maxLength={500}
              onChange={handleChange}
              value={inputValue}
              placeholder="Let's Chat..."
            />
            <button
              onClick={() => {
                sendMsg();
              }}
              disabled={isGettingMsg}
              className="w-[16%] h-full bg-custom-blue-green disabled:bg-gray-600 ml-1 flex items-center justify-center rounded-lg"
            >
              <i className="ri-send-plane-2-fill text-white text-[28px]"></i>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Chat;
