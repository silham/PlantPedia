/* eslint-disable @next/next/no-img-element */

const AgroAI = () => {
  return (
    <div className="flex rounded-xl bg-custom-blue-green w-full pb-8 my-[5vh] flex-col shadow-md overflow-hidden px-8">
      <div className="w-full text-[52px] font-black text-center text-white">
        <h3>Agro AI</h3>
      </div>
      <div className="flex flex-row w-full justify-around mt-4 h-[400px]">
        <div className="w-[45%] object-cover h-full rounded-lg overflow-hidden">
          <img
            src="/ai-watering-plant.webp"
            alt="agro ai"
            loading="lazy"
            className=""
          />
        </div>
        <div className="w-[45%] h-full flex items-center justify-center">
          <p className="text-white font-semibold text-[22px] leading-tight">
            &quot;AI is the seed of innovation, the water of growth, and the
            fertilizer of efficiency. It can help us cultivate a better future
            for ourselves and our planet.&quot; ~ Bing AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgroAI;
