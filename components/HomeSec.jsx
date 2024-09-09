import React from "react";
import Header from "./Header";
import Page1 from "./Home/Page1";
import Page2 from "./Home/Page2";
import { Page3 } from "./Home/Page3";
import Page4 from "./Home/Page4";
import Page5 from "./Home/Page5";
import Footer from "./Footer";

function HomeSec() {
  return (
    <div className="bg-[#E4E8EC] w-full p-3">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </div>
  );
}

export default HomeSec;
