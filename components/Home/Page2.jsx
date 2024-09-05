import React from "react";

function Page2() {
  return (
    <div className="bg-[#F0F2F4] w-full min-h-screen">
      <p className="text-gray-800 w-full text-[250%] pt-20 pl-3">
        Investments,Made Easy.
      </p>
      <div className="w-full flex flex-row justify-end items-center">
        <div className="flex flex-col w-[95%]">
          <div className="flex flex-row gap-2 py-[14%] px-[4%]">
            <div className="">
              <p className="text-[180%]">Find</p>
              <p className="text-[80%]">
                The next unicorn, waiting for you. more text can be added later
              </p>
            </div>
            <div className="">
              <p className="text-[180%]">Analyze</p>
              <p className="text-[80%]">
                Full Transparency. Every possible statistic, available in easily
                readable form. more text later
              </p>
            </div>
            <div className="">
              <p className="text-[180%]">Invest</p>
              <p className="text-[80%]">
                Ready to invest? We have it covered, easily invest directly
              </p>
            </div>
            <div className="">
              <p className="text-[180%]">Manage</p>
              <p className="text-[80%]">
                Manage all investments , all at your fingertips.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-center gap-[100px] text-center pt-[10%] text-[100%]">
            <div className="border-2 border-[#8444FF] py-3 px-[10%] rounded-xl">
              Find a Startup
            </div>
            <div className="border-2 border-[#00B568] py-3 px-[10%] rounded-xl">
              Find a Research
            </div>
          </div>
        </div>
        <div className=" w-[30%] m-[5%] flex items-center justify-center">
          <div className="bg-[#8444FF] h-[50%] pt-[60%] px-4 rounded-xl ">
            <div className="carousel">
              <div id="item1" className="carousel-item ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  className="w-full"
                />
              </div>
              <div id="item2" className="carousel-item ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  className="w-full"
                />
              </div>
              <div id="item3" className="carousel-item ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                  className="w-full"
                />
              </div>
              <div id="item4" className="carousel-item ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 py-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
