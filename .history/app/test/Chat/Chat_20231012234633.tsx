"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const Chat = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [messages, setMessages] = useState([
    {
      author: "0",
      content: "hi",
    },
    {
      author: "1",
      content: "Hi there! How can I help you today?",
    },
    {
      author: "0",
      content: "Tell me about tea plant",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const sendMsg = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { author: "0", content: inputValue }]);
      fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: {
            context:
              "You are Plant Pal, a friendly AI assistant for agriculture. You have a lot of experience in agriculture. Also you have power to search data across the Internet. So you can produce acure ",
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
          candidate_count: 1, // your JSON body parameters
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      setInputValue("");
    }
  };
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
          <div className="flex flex-grow flex-col overflow-y-scroll justify-end pb-2">
            <div className="my-2 flex  justify-start">
              <p className=" text-[14px] leading-tight px-1 py-2 bg-green-300 rounded-t-lg rounded-br-lg rounded-bl-none max-w-[85%]">
                Hello! I&apos;m Plant Pal. Your agri assistant. How can I help
                you today?
              </p>
            </div>
            <div className="my-2 flex justify-end">
              <p className=" text-[14px] leading-tight px-1 py-2 bg-blue-300 rounded-t-lg rounded-bl-lg rounded-br-none max-w-[85%]">
                Hello!
              </p>
            </div>
            {messages.length > 0
              ? messages.map((message, index) => {
                  return (
                    <div
                      className={`my-2 flex ${
                        message.author == "0" ? "justify-end" : "justify-start"
                      }`}
                      key={index}
                    >
                      <p
                        className={`text-[14px] leading-tight px-1 py-2 bg-${
                          message.author == "0" ? "blue" : "green"
                        }-300 rounded-t-lg rounded-bl-lg rounded-br-none max-w-[85%] min-w-[25px]`}
                      >
                        {message.content}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="flex w-full h-[8%]">
            <input
              ref={inputRef}
              id="input"
              className="pl-1 text-[14px] border-2 border-gray-600 h-full rounded-lg flex-grow"
              maxLength={500}
              onChange={handleChange}
              value={inputValue}
            />
            <button
              onClick={() => {
                sendMsg();
                console.log("btn clicked");
              }}
              className="w-[16%] h-full bg-custom-blue-green ml-1 flex items-center justify-center rounded-lg"
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
