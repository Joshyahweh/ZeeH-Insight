import React, { useState } from "react";
import BankDetails from "userComponent/Connect/BankDetails/BankDetails";
import Connect from "userComponent/Connect/Connect";
import Dashboard from "userComponent/Dashboard/Dashboard";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const GlobalBankDetails = () => {
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
        <BankDetails />
      </div>
    </div>
  );
};

export default GlobalBankDetails;
