
import React, { useState } from "react";
import Sidebarr from "../global/Sidebar";
import Topbar from "../global/Topbar";
import HomeDetails from "../home/HomeDetails";

const Global = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleToggle = () => {
    setToggleSidebar((prev) => !prev);
    console.log("clicked");
  };
  return (
    <div className="flex">
      <Sidebarr toggleSidebar={toggleSidebar} />
      
      <div>
        <Topbar click={handleToggle} />
        <HomeDetails />
      </div>
    </div>
  );
};

export default Global;
