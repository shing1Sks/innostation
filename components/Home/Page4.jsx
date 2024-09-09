import React from "react";
import Image from "next/image";

const Page4 = () => {
  return (
    <>
      <div className=" w-full  min-h-screen flex flex-col bg-white">
        <h1 className="text-5xl text-bold py-5 pl-9">Research</h1>
        <div className="flex justify-center pt-20">
          <div className="bg-p4bg w-[80%] h-[400px] flex justify-between rounded-2xl ml-8 mr-8 mb-8 ">
            <div className=" items-center pl-7 w-1/3 ">
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Publish
              </div>
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Citations
              </div>
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Collaboration
              </div>
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Grant Finder
              </div>
            </div>
            <div className="flex justify-center items-center pr-16">
              <Image
                className="rounded-lg"
                src="/research.jpeg"
                width={500}
                height={40}
                alt="Gov logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
