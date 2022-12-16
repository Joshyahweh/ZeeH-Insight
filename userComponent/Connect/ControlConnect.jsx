import React from "react";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import FilterConnect from "./FilterConnect";
import StatusConnect from "./StatusConnect";
import { Box } from "@chakra-ui/react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useRouter } from "next/router";
// absolute left-72 bottom-[-90%] w-[75%]
const ControlConnect = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/bankDetails");
  };
  return (
    <div className="pt-10">
      <Box className="h-full border rounded-lg">
        <div className="flex flex-shrink-0 items-center justify-between p-5">
          <div className="flex sm:flex sm:items-center gap-4">
            <FilterConnect />
            <div>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <BsSearch className="text-gray-500" />
                </span>
                <input
                  className="placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search bank name"
                  type="text"
                  name="search"
                />
              </label>
            </div>
            <StatusConnect />
          </div>
        </div>
        <div className="flex items-start justify-between mt-7 bg-gray-200 p-3 w-full text-gray-500 pr-24">
          <div className="flex items-center gap-6">
            <input type="checkbox" name="" id="" />
            <p>Bank Name</p>
          </div>
          <p>Account Number</p>
          <p>Account Balance</p>
          <p>Status</p>
        </div>
        <div className="flex items-start justify-between mt-7 p-3 w-full text-gray-500 pr-24">
          <div className="flex items-center gap-6">
            <input type="checkbox" name="" id="" />
            <p onClick={handleClick} className="cursor-pointer">
              GTBank
            </p>
          </div>
          <Box position="relative" left={30}>
            <p>312363404</p>
          </Box>
          <Box position="relative" left={50} className="flex items-center">
            <TbCurrencyNaira size={20} />
            <p>8000</p>
          </Box>
          <Box
            position="relative"
            left={75}
            gap="1.5rem"
            className="flex items-center"
          >
            <p className="bg-[#FFE9D5] py-2 px-9 text-[#7A0916] font-semibold rounded-lg">
              Failed
            </p>
            <BsThreeDotsVertical />
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default ControlConnect;
