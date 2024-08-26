import React from "react";

function Page3() {
  return (
    <div className="flex flex-col">
      <p className="text-xl w-[100%] sm:text-6xl font-semibold text-black text-center">
        Revolutionize Your Approach
      </p>
      <p className="text-center text-orange-700 py-[5%]">
        //this is a placeholder for our steps wala diagram
      </p>
      <div className="w-full flex flex-col sm:flex-row">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full pl-[5%] sm:pl-[35%] hover:cursor-pointer">
            <div className="border-[1px] w-fit px-[2%] py-[2px] mb-[10%] text-lg rounded-2xl border-purple-500 text-purple-500">
              Get Started
            </div>
          </div>
          <div className="sm:ml-[10%] flex flex-col items-center justify-center sm:p-2">
            <p className="text-black font-semibold sm:w-[50%] text-lg sm:text-3xl">
              Unlock the Power of Collaboration
            </p>
            <p className="text-gray-500 w-[90%] sm:w-[50%] py-4 text-sm sm:text-lg">
              Explore Our Innovative Platform and Discover New Opportunities to
              Grow Your Business, Advance Your Research, or Ignite Your
              Entrepreneurial Passion
            </p>
          </div>
        </div>
        <img
          src="/page3asset.webp"
          className="w-[80%] pl-[10%]sm:pl-0 sm:w-[20%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Page3;
