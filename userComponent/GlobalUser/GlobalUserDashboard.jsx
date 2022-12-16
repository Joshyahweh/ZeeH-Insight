import React, { useState } from "react";
import Dashboard from "userComponent/Dashboard/Dashboard";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const GlobalUserDashboard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleToggle = () => {
    setToggleSidebar((prev) => !prev);
    console.log("clicked");
  };
  return (
    <div className="flex">
      <UserSidebar toggleSidebar={toggleSidebar} />

      <div>
        <UserTopbar click={handleToggle} />
        <Dashboard />
      </div>
    </div>
  );
};

export default GlobalUserDashboard;
