import prisma from "@/prisma/client";

const PlantOfDay = () => {
  const pod = await prisma.plants.findUnique({});
  return (
    <div className="flex rounded-xl bg-custom-blue-green w-full h-[80vh] my-[10vh] flex-col">
      <div className="w-full h-fit flex justify-center">
        <h3 className="text-[52px] text-white font-black">Plant of the Day</h3>
      </div>
      <div className="w-full h-full flex items-center py-4 px-8"></div>
    </div>
  );
};

export default PlantOfDay;
