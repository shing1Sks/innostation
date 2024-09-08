import React from "react";

function Compose() {
  return (
    <div className="w-full border-2 border-black mx-2 flex flex-col items-center justify-center p-3 h-[80vh]">
      <p className="text-2xl p-3">Compose</p>

      <div className="flex flex-col h-[100%] items-center gap-y-4 justify-center">
        <div>
          <a href="/main/publish">
            <button className="border-2 border-black p-1">
              Frame & get IPR
            </button>
          </a>
        </div>
        <div>
          <button className="border-2 border-black p-1">Publish</button>
        </div>
      </div>
    </div>
  );
}

export default Compose;
