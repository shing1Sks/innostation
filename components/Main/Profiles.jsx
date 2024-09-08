import React from "react";

function Profiles() {
  let projects = [
    {
      name: "Raymond Singh Dhillon",
      desc: "Engineer Astronaut, Great_Guy",
    },
    {
      name: "Harish Kumar Chandra Chauhan",
      desc: "IPR_Specialist, Researcher@ProtonNeutronCollision",
    },
    {
      name: "Mc Donald Duck",
      desc: "Entraprenuer Investor BizWizard",
    },
  ];
  return (
    <div className="w-full border-2 border-black mx-2 flex flex-col items-center justify-center p-3 h-[80vh]">
      <p className="text-2xl p-3">Profiles</p>
      <div className="border-2 border-black w-[80%] h-full text-black pt-3">
        {projects.map((i, ind) => (
          <div key={ind} className="m-1 border-2 border-gray-600 py-2">
            <div className="text-gray-700 text-xl">{i.name}</div>
            <div>Profession - {i.desc}</div>
            <div className="w-full flex flex-row justify-end p-2 gap-4">
              <div className=" btn">Invite</div>
              <div className="btn">Reach Out</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profiles;
