import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const HeaderSettings = () => {
  const router = useRouter();
  const handleProfileClick = () => {
    router.push("/dashboard/settings");
  };
  const handlePasswordClick = () => {
    router.push("/dashboard/settings/passwordSettings");
  };
  return (
    <div>
      <h2 className="mt-2 font-bold text-2xl">Settings</h2>
      <Box className="flex items-center gap-10 pt-5">
        <h4 onClick={handleProfileClick} className="cursor-pointer">
          Profile Settings
        </h4>
        <h4 onClick={handlePasswordClick} className="cursor-pointer">
          Password
        </h4>
      </Box>
      {/* <Box position="absolute" width="77.7rem" top="17rem">
        <hr />
      </Box> */}
    </div>
  );
};

export default HeaderSettings;
