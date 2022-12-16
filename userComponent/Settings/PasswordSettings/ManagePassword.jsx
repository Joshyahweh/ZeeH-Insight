import { Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";


const ManagePassword = () => {
  
  return (
    <div className="text-gray-500 pt-5">
      <Box>
        <h2 className="font-bold text-gray-700">Password</h2>
        <p className=" pt-3">Manage your password</p>
      </Box>
      
      <Box>
        <form action="">
          <Box gap={120} className="sm:flex item-center justify-start pt-5">
            <Box className="flex flex-col gap-2 items-start">
              <label htmlFor="">Password</label>
              <input
                placeholder="Enter your current password"
                type="password"
                name=""
                id=""
                className="placeholder:text-slate-400 block w-full rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                style={{ backgroundColor: "#F5F6FF", width: "120%" }}
              />
            </Box>
            <Box className="flex flex-col gap-2 items-start">
              <label htmlFor="">New Password</label>
              <input
                placeholder="Enter your new password"
                type="password"
                name=""
                id=""
                className="placeholder:text-slate-400 block w-full rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                style={{ backgroundColor: "#F5F6FF", width: "120%" }}
              />
            </Box>
          </Box>
          <Box className="flex flex-col gap-2 items-start pt-10">
            <label htmlFor="">Confirm Password</label>
            <input
              placeholder="Confirm new password"
              type="password"
              name=""
              id=""
              className="placeholder:text-slate-400 block w-full rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              style={{ backgroundColor: "#F5F6FF", width: "120%" }}
            />
          </Box>
          <div className="pt-10">
            <button
              style={{ backgroundColor: "#0019FF" }}
              className="text-white py-3 px-5 rounded-md"
            >
              Update Password
            </button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default ManagePassword;
