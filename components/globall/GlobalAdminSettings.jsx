import AdminSettings from "components/AdminSettings/AdminSettings";
import Connect from "components/connect/Connect";
import Customer from "components/customers/Customer";
import React, { useState } from "react";
import Sidebarr from "../global/Sidebar";
import Topbar from "../global/Topbar";
import HomeDetails from "../home/HomeDetails";

const GlobalAdminSettings = () => {
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
        <AdminSettings />
      </div>
    </div>
  );
};

export default GlobalAdminSettings;
