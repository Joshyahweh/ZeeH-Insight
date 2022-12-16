import Connect from "components/connect/Connect";
import Customer from "components/customers/Customer";
import React, { useState } from "react";
import Sidebarr from "../global/Sidebar";
import Topbar from "../global/Topbar";
import HomeDetails from "../home/HomeDetails";

const GlobalConnect = () => {
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
        <Connect />
      </div>
    </div>
  );
};

export default GlobalConnect;
