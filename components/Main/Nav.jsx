import React from "react";

function Nav() {
  return (
    <div className="w-full border-2 border-black flex p-3">
      Nav
      <div className="flex justify-end w-full mr-10 gap-2">
        <div className="border-2 border-black px-2 py-1">Track</div>
        <div className="border-2 border-black px-2 py-1">Profile</div>
      </div>
    </div>
  );
}

export default Nav;
