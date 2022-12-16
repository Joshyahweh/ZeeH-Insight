import React from "react";
import AdminHeaderSettings from "./AdminHeaderSettings";
import AdminProfileSetting from "./AdminProfileSetting";

const AdminSettings = () => {
  return (
    <div className="m-10">
      <AdminHeaderSettings />
      <AdminProfileSetting />
    </div>
  );
};

export default AdminSettings;
