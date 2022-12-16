import Topbar from "components/global/Topbar";
import React from "react";
import AdminHeaderSettings from "../AdminHeaderSettings";
import AdminManagePassword from "./AdminManagePassword";

const AdminPasswordSettings = () => {
  return (
    <div className="m-10">
      
      <AdminHeaderSettings />
      <AdminManagePassword />
    </div>
  );
};

export default AdminPasswordSettings;
