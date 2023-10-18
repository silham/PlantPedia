/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="flex w-full py-8 flex-col">
      <div className="w-full flex justify-center">
        <h3 className="text-[52px] text-gray-700 font-black mb-4">About Us</h3>
      </div>
      <div className="flex flex-row justify-between text-justify">
        <div className="w-[48%]">
          <p>
            &nbsp;&nbsp;&nbsp;<span className="text-[30px] font-bold">P</span>
            lantpedia is the ultimate online destination for plant enthusiasts
            of all levels. Whether you are a beginner or a professional, you
            will find a wealth of information and inspiration on our website.
            You can browse through thousands of plant profiles, each with
            detailed descriptions, photos, and care guides. You can also use our
            plant identification tool to find out the name and characteristics
            of any plant you encounter. If you are interested in the benefits of
            plants, you can explore our sections on medicinal plants and edible
            plants, where you will learn about their uses, properties, and
            recipes. And if you want to connect with other plant lovers, you can
            join our community forums, where you can ask questions, share tips,
            and show off your plants.
          </p>
        </div>
        <div className="w-[48%]">
          <div className="w-full h-52 flex justify-center overflow-hidden">
            <img
              src="/growth.webp"
              alt="about us"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <p>
            Plantpedia is more than just a website, it’s a way of life. We
            believe that plants enrich our lives in many ways, from improving
            our health and well-being to beautifying our homes and gardens.
            That’s why we are passionate about sharing our knowledge and passion
            for plants with you. Join us today and discover the amazing world of
            plants!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
