import Connect from "userComponent/Connect/Connect";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";
import ContainerUserConnect from "userComponent/Connect/ContainerUserConnect";

const connect = () => {
  return (
    <div>
      <ContainerUserConnect />
    </div>
  );
};

export default connect;
