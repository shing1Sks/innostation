import React from "react";
import Nav from "./Nav";
import Profiles from "./Profiles";
import Compose from "./Compose";
import Projects from "./Projects";

function Main() {
  return (
    <div className="px-1 py-2">
      <Nav />
      <div className="w-full flex flex-row items-center justify-between min-h-screen">
        <Compose />
        <Projects />
        <Profiles />
      </div>
    </div>
  );
}

export default Main;
