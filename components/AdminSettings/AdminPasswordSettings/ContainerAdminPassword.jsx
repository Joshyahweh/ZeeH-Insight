import Sidebarr from "components/global/Sidebar";
import Topbar from "components/global/Topbar";
import GlobalAdminPasswordSettings from "components/globall/GlobalAdminPasswordSettings";
import React from "react";

import AdminPasswordSettings from "./AdminPasswordSettings";

const ContainerAdminPassword = () => {
  return (
    <div>
      <GlobalAdminPasswordSettings />
    </div>
  );
};

export default ContainerAdminPassword;
