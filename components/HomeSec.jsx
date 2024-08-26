import React from "react";

function HomeSec() {
  return (
    <div className="text-black w-full items-center flex flex-row py-[5%] justify-between">
      <img
        src="./assetleft.webp"
        className="h-[550px] rounded-xl pt-2 sm:block hidden"
        alt=""
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg sm:text-7xl text-center font-[400] pb-7">
          Discover the Power of Innovation: Connect
        </p>
        <p className="text-md sm:text-2xl text-center px-[10%] pb-5 text-gray-600">
          Unlock a New World of Possibilities: Explore Our Platform and Unleash
          Your Entrepreneurial Spirit
        </p>
        <button className="bg-yellow-400 rounded-xl text-lg sm:text-xl w-[80%] sm:w-fit py-2 sm:px-5">
          Join now
        </button>
      </div>
      <img
        src="./assetright.webp"
        className="h-[550px] rounded-xl pt-2 sm:block hidden"
        alt=""
      />
    </div>
  );
}

export default HomeSec;
