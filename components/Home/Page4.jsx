import React from "react";

function Page4() {
  return (
    <div className="flex sm:flex-row flex-col w-full relative items-center justify-center p-[10%] bg-[#F2F1FF]">
      <div className=" sm:flex items-center justify-center hidden">
        <img src="/page4asset.webp" className="w-[80%]" alt="" />
      </div>
      <div className="w-full flex flex-col items-center p-[10%] justify-center">
        <p className="text-xs sm:text-sx text-purple-500 w-full ">iNNovate</p>
        <p className="text-gray-700 w-full pt-[20px] font-semibold text-2xl sm:text-7xl">
          Transform
        </p>
        <p className="font-medium text-lg sm:text-3xl my-[2%] text-gray-600">
          Unleash Your Entrepreneurial Spirit: Our Platform Empowers You to
          Connect, Collaborate, and Bring Your Innovative Ideas to Life
        </p>
        <p className="font-medium text-sm sm:text-xl my-[2%] text-gray-400">
          Discover a New World of Possibilities: Our Comprehensive Platform
          Connects You with a Global Community of Innovators, Researchers, and
          Entrepreneurs
        </p>
        <p className="text-md text-purple-500 w-full pt-3">Join Now</p>
      </div>
      <div className="hidden sm:block ">
        <img
          src="/pg4assb.webp"
          className="absolute right-0 bottom-[70%]"
          alt=""
        />
        <img src="/pg4assc.webp" className="absolute right-0" alt="" />
      </div>
    </div>
  );
}

export default Page4;
