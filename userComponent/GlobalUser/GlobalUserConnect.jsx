import React, { useState } from "react";
import Connect from "userComponent/Connect/Connect";
import Dashboard from "userComponent/Dashboard/Dashboard";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const GlobalUserConnect = () => {
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
        <Connect />
      </div>
    </div>
  );
};

export default GlobalUserConnect;
