import React from "react";
import Header from "./Header";
import Page1 from "./Home/Page1";
import Page2 from "./Home/Page2";
import { Page3 } from "./Home/Page3";

function HomeSec() {
  return (
    <div className="bg-[#E4E8EC] w-full p-3">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default HomeSec;
