import React from "react";

function Compose() {
  return (
    <div className="w-full border-2 border-white flex p-3 h-[80vh]">
      Compose
      <div className="flex flex-col h-[100%] items-center gap-y-4 justify-center">
        <div>
          <button className="border-2 border-white p-1">Publish</button>
        </div>
        <div>
          <button className="border-2 border-white p-1">Frame & get IPR</button>
        </div>
      </div>
    </div>
  );
}

export default Compose;
