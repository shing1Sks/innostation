import React from "react";

function HomeSec() {
  return (
    <div className="text-black w-full items-center flex flex-row py-[5%] justify-between">
      <img
        src="./assetleft.webp"
        className="h-[550px] rounded-xl pt-2"
        alt=""
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-7xl text-center font-[400] pb-7">
          Discover the Power of Innovation: Connect
        </p>
        <p className="text-2xl text-center px-[10%] pb-5 text-gray-600">
          Unlock a New World of Possibilities: Explore Our Platform and Unleash
          Your Entrepreneurial Spirit
        </p>
        <button className="bg-yellow-400 rounded-3xl text-xl py-1 px-2">
          Join now
        </button>
      </div>
      <img
        src="./assetright.webp"
        className="h-[550px] rounded-xl pt-2"
        alt=""
      />
    </div>
  );
}

export default HomeSec;
