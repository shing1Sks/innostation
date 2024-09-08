import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row justify-between gap-x-5 text-[80%] items-center">
        <div className="bg-[#5a05ff] text-white rounded-full text-center px-4 py-2">
          logo
        </div>
        <div className="flex flex-row text-[#a06fff] bg-[white] rounded-full px-4 py-2 gap-x-6">
          <div className="hover:underline">About Us</div>
          <div className="hover:underline">Startups</div>
          <div className="hover:underline">Investments</div>
          <div className="hover:underline">Research</div>
          <div className="hover:underline">Analytics</div>
        </div>
      </div>
      <div className="flex flex-row text-[80%] text-gray-500 gap-x-4">
        <div className="bg-[#d9d9d9] rounded-full text-gray-700 flex items-center justify-center shadow-inner shadow-gray-400">
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-[#d9d9d9]  px-4 py-2 rounded-full focus:outline-none shadow-lg"
          />
        </div>

        <div className="bg-[#8444ff] flex items-center justify-center rounded-full text-white text-[80%] px-4">
<<<<<<< HEAD
          <Link  href="/login">
          Login/Signup
          </Link>
=======
          <a href="/auth/login">Login/Signup</a>
>>>>>>> d483e41f330753bc2f41f3e28a738916f6ab487d
        </div>
      </div>
    </div>
  );
}

export default Header;
