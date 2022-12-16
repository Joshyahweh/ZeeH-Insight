import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const AdminHeaderSettings = () => {
  const router = useRouter();
  const handleProfileClick = () => {
    router.push("/adminDashboard/adminSettings");
  };
  const handlePasswordClick = () => {
    router.push("/adminDashboard/adminSettings/adminPasswordSettings");
  };
  return (
    <div className="w-full">
      <h2 className=" mt-2 font-bold text-2xl">Settings</h2>
      <Box width="100%" className="flex items-center gap-10 py-5">
        <h4 onClick={handleProfileClick} className="cursor-pointer">
          Profile Settings
        </h4>
        <h4 onClick={handlePasswordClick} className="cursor-pointer">
          Password
        </h4>
      </Box>
      <Box position="absolute" width="83%" left="14rem" top="12rem">
        {/* <hr /> */}
      </Box>
    </div>
  );
};

export default AdminHeaderSettings;
