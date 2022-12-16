import Kyc from "components/kyc/Kyc";
import React, { useState } from "react";
import Sidebarr from "../global/Sidebar";
import Topbar from "../global/Topbar";
import HomeDetails from "../home/HomeDetails";

const GlobalKyc = () => {
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
        <Kyc />
      </div>
    </div>
  );
};

export default GlobalKyc;
