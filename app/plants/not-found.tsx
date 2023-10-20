import Err404 from "../components/404/Err404";

const NotFound = () => {
  return (
    <div className="w-screen min-h-screen -mt-16 flex items-center justify-center">
      <div className="w-1/2">
        <Err404 />
        <h1 className="text-[36px] text-gray-900 font-black">
          &nbsp;&nbsp;&nbsp;Hmm! We couldn&apos;t find the Plant
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
