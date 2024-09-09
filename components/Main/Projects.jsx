import React from "react";

function Projects() {
  let projects = [
    {
      name: "Flying Car",
      desc: "it will fly ! so nice to just fly to your office !",
    },
    {
      name: "horlicks for adults!!",
      desc: "if your height is small dont worry! this wont help but does tastes good tho !!",
    },
    {
      name: "crax burger",
      desc: "eat your burger and it might contain a toy in the patty",
    },
  ];
  return (
    <div className="w-full border-2 border-black mx-2 flex flex-col items-center justify-center p-3 h-[80vh]">
      <p className="text-2xl p-3">Projects</p>
      <div className="border-2 border-black w-[90%] h-full text-black pt-3">
        {projects.map((i, ind) => (
          <div key={ind} className="m-1 border-2 border-gray-600 py-2">
            <div className="text-gray-700 text-xl">{i.name}</div>
            <div>{i.desc}</div>
            <div className="w-full flex flex-row justify-end p-2 gap-4">
              <div className=" btn">collab</div>
              <div className="btn">invest</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
