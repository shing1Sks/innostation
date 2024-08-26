import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-row justify-between align-baseline pt-2 text-black">
      <div className="flex justify-center align-baseline sm:text-5xl sm:font-normal text-xl font-semibold pl-4">
        iNNostation
      </div>
      <div className="text-gray-500 text-xl sm:flex justify-center align-baseline hidden pr-4">
        <a
          href="Home"
          className="p-2 hover:border-b-gray-700 hover:border-2 border-2 border-transparent"
        >
          Home
        </a>
        <a
          href="About"
          className="p-2 hover:border-b-gray-700 hover:border-2 border-2 border-transparent"
        >
          About
        </a>
        <a
          href="Contact"
          className="p-2 hover:border-b-gray-700 hover:border-2 border-2 border-transparent"
        >
          Contact
        </a>
        <a
          href="Join-Us"
          className="p-2 hover:border-b-gray-700 hover:border-2 border-2 border-transparent"
        >
          Join-Us
        </a>
      </div>
    </div>
  );
}

export default Header;
