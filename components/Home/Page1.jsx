import React from "react";

function Page1() {
  return (
    <div className=" w-full min-h-screen">
      <div className="flex flex-row items-center justify-between w-full pt-[5%]">
        <div className="flex flex-col items-center justify-center w-[60%] pl-[2%] pt-[10%]">
          <div>
            <img src="./text.png" alt="" className="w-[50%]" />
          </div>
          <div className="w-full text-gray-700">
            <p className="text-[200%] pt-7">Startups. Research. Investments.</p>
            <p className="text-[80%] pt-3">At your fingertips</p>
            <p className="text-[20%] pt-3">A Govt. of India initiative</p>
          </div>
        </div>
        <div className="text-center pr-[2%] text-gray-700">
          <div>
            <p className="text-[150%]">Choose your iNNovation</p>
          </div>
          <div className="flex flex-col text-[120%] text-gray-50 py-10 gap-y-8">
            <div className="px-6 py-4 bg-[#5A05FF] rounded-2xl">
              Investments
            </div>
            <div className="px-6 py-4 bg-[#00b568] rounded-2xl">Startups</div>
            <div className="px-6 py-4 bg-[#0564FF] rounded-2xl">Research</div>
            <div className="px-6 py-4 bg-[#e1506b] rounded-2xl">IPR</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="relative">
          <svg
            width="60"
            height="60"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_34_110)">
              <circle cx="51" cy="47" r="45" fill="#8444FF" />
            </g>
            <defs>
              <filter
                id="filter0_d_34_110"
                x="0.3"
                y="0.3"
                width="101.4"
                height="101.4"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2.85" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_34_110"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_34_110"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className="absolute top-[13%] left-[16%]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 30C42 31.0609 41.5786 32.0783 40.8284 32.8284C40.0783 33.5786 39.0609 34 38 34H14L6 42V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V30Z"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
