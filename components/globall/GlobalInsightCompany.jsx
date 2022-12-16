import Connect from "components/connect/Connect";
import Customer from "components/customers/Customer";
import InsightCompanies from "components/insight/insightCompanies/InsightCompanies";
import React, { useState } from "react";
import Sidebarr from "../global/Sidebar";
import Topbar from "../global/Topbar";
import HomeDetails from "../home/HomeDetails";

const GlobalInsightCompany = () => {
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
        <InsightCompanies />
      </div>
    </div>
  );
};

export default GlobalInsightCompany;
