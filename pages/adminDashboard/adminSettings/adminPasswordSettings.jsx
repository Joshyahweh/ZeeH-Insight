import AdminPasswordSettings from "components/AdminSettings/AdminPasswordSettings/AdminPasswordSettings";
import ContainerAdminPassword from "components/AdminSettings/AdminPasswordSettings/ContainerAdminPassword";
import Sidebarr from "components/global/Sidebar";
import Topbar from "components/global/Topbar";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";

const adminPasswordSettings = () => {
  return <div></div>;
};

export default adminPasswordSettings;

adminPasswordSettings.getLayout = function PageLayout(page) {
  return (
    <>
      <ProSidebarProvider>
        {page}

        <ContainerAdminPassword />
      </ProSidebarProvider>
    </>
  );
};
