import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import ContainerSettings from "userComponent/Settings/ContainerSettings";
import Settings from "userComponent/Settings/Settings";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const settings = () => {
  return (
    <div>
      <ContainerSettings />
    </div>
  );
};

export default settings;
