import React from "react";

function Page2() {
  return (
    <div className="flex flex-col sm:flex-row py-[5%]">
      <div className="flex flex-col items-center justify-center w-full sm:w-[50%] p-[4%] border-t-2 border-b-2 border-r-2 border-gray-400">
        <p className="font-normal text-sm sm:text-lg text-gray-500 text-left w-[70%]">
          Revolutionize Your Approach to Innovation: Our Comprehensive Platform
          Empowers You to Connect with Like-Minded Individuals, Tap into a
          Diverse Network of Experts, and Bring Your Ideas to Life
        </p>
        <img src="/page2asset.webp" className="pt-[2%] w-[70%]" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFF4E4] w-full sm:w-[50%] p-[4%]">
        <div className="w-full flex flex-row">
          <p className="text-[#e2c097] text-left pl-[15%] text-base sm:text-lg pb-[1%]">
            ⭐Discover
          </p>
        </div>
        <p className="text-gray-600 text-sm w-[70%] sm:text-lg p-2">
          Unlock a World of Collaboration and Innovation: Our Platform Connects
          You with a Global Community of Researchers, Entrepreneurs,
          Businesspeople, and Passionate Innovators. Collaborate on Projects,
          Share Knowledge, and Bring Your Groundbreaking Ideas to Life
        </p>
      </div>
    </div>
  );
}

export default Page2;
