import React from "react";

function Footer() {
  return (
    <div className="flex flex-row bg-[#4B1A76] py-[8%] px-[2%] text-sm sm:text-lg text-slate-300 items-center justify-evenly">
      <div>iNNostation</div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Resources</p>
        <p>Overview</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Support</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Connect</p>
        <p>Sign Up</p>
        <p>Partners</p>
        <p>Events</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Company</p>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Footer;
