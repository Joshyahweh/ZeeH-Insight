import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import ContainerPasswordSettings from "userComponent/Settings/PasswordSettings/ContainerPasswordSettings";
import PasswordSettings from "userComponent/Settings/PasswordSettings/PasswordSettings";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const passwordSettings = () => {
  return (
    <div>
      <ContainerPasswordSettings />
    </div>
  );
};

export default passwordSettings;
