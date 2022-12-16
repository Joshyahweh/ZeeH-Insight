import React, { useState } from "react";
import Dashboard from "userComponent/Dashboard/Dashboard";
import Settings from "userComponent/Settings/Settings";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const GlobalUserSettings = () => {
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
        <Settings />
      </div>
    </div>
  );
};

export default GlobalUserSettings;
