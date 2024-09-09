import React from "react";
import Image from "next/image";
const Page5 = () => {
  return (
    <>
      <div className=" w-full  min-h-screen">
        <h1 className="text-5xl text-bold py-5 pl-9">IPR Management</h1>
        <div className="flex justify-center pt-20">
          <div className="bg-p5bg w-[80%] h-[400px] flex justify-between rounded-2xl ml-8 mr-8 mb-8 ">
            <div className=" items-center pl-7 w-3/5 ">
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Patent Registrations
              </div>
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Paper Publication
              </div>
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Application Status
              </div>
              <div className="bg-white w-full py-3 my-9 rounded-xl text-center">
                Infringement Claims
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/Gov.svg" width={350} height={40} alt="Gov logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
