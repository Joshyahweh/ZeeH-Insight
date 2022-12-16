import React, { useState } from "react";
import Dashboard from "userComponent/Dashboard/Dashboard";
import PasswordSettings from "userComponent/Settings/PasswordSettings/PasswordSettings";
import Settings from "userComponent/Settings/Settings";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const GlobalPasswordSettings = () => {
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
        <PasswordSettings />
      </div>
    </div>
  );
};

export default GlobalPasswordSettings;
