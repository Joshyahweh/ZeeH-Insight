import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import BankDetails from "userComponent/Connect/BankDetails/BankDetails";
import ContainerBankDetails from "userComponent/Connect/BankDetails/ContainerBankDetails";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import UserTopbar from "userComponent/Settings/Global/UserTopbar";

const bankDetails = () => {
  return (
    <div>
      <ContainerBankDetails />
    </div>
  );
};

export default bankDetails;
