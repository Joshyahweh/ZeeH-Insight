import Topbar from "components/global/Topbar";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import ContainerDashboard from "userComponent/Dashboard/ContainerDashboard";
import Dashboard from "userComponent/Dashboard/Dashboard";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const UserDashboard = () => {
  return (
    <div>
      <ContainerDashboard />
    </div>
  );
};

export default UserDashboard;
