import React from "react";

function Page6() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row">
      <div className="flex flex-col items-start justify-center p-[10%]">
        <p className="text-gray-700 w-full font-semibold text-lg sm:text-3xl pb-[6%]">
          Innovate with Purpose
        </p>
        <p className="text-gray-500 text-sm sm:text-xl pb-[4%] w-full sm:w-[70%]">
          Discover the Power of Collaboration: Our Platform Connects You with a
          Global Community of Researchers, Entrepreneurs, and Visionaries.
          Collaborate on Projects, Share Knowledge, and Unlock New Pathways to
          Success
        </p>
        <p className="text-gray-400 w-full">Join Now</p>
      </div>
      <div>
        <img src="page6asset.webp" className="w-full" alt="" />
      </div>
    </div>
  );
}

export default Page6;
