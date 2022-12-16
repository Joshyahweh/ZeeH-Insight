import React from "react";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import Filter from "components/Filter";
import Status from "components/Status";
import { Box } from "@chakra-ui/react";

const InsightControls = () => {
  return (
    <div>
      <div>
        <main className=" w-full  border rounded-lg">
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <Filter />
              <div>
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <BsSearch className="text-gray-500" />
                  </span>
                  <input
                    className="placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search customer details"
                    type="text"
                    name="search"
                  />
                </label>
              </div>
              <Status />
              <fieldset>
                <legend className="text-[#3FC080] ">Start date</legend>
                <div className="flex items-center py-1 px-2 relative bottom-1 ">
                  <input
                    type="number"
                    placeholder="mm/dd/yyyy"
                    size={10}
                    className="focus:outline-none focus:border-white focus:ring-white focus:ring-0"
                  />
                  <BiCalendar className="text-gray-500" size={20} />
                </div>
              </fieldset>
              <div className="flex items-center py-1 relative bottom-1">
                <input
                  type="number"
                  placeholder="End Date"
                  size={10}
                  className="placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-2 flex items-center pl-2">
                  <BiCalendar className="text-gray-500" size={20} />
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#2B40FF] p-2 text-white rounded-md">
                Export
              </button>
            </div>
          </div>
          <div className="flex items-start justify-between mt-7 bg-gray-200 p-3 w-full text-gray-500 pr-24">
            <div className="flex items-center gap-6">
              <input type="checkbox" name="" id="" />
              <p>Name</p>
            </div>
            <p>Email</p>
            <p>Number of Linked Accounts</p>
            <p>No. of API calls</p>
            <p>Status</p>
          </div>
          <div className="flex items-start justify-between mt-7 p-3 w-full text-gray-500 pr-24">
            <div className="flex items-center gap-6">
              <input type="checkbox" name="" id="" />
              <p>Marvin McKinney</p>
            </div>
            <div className="relative right-16">
              <p>jessica.hn@example.com</p>
            </div>
            <p>3</p>
            <p className="relative left-24">100</p>
            <Box
              position="relative"
              left={20}
              gap="1.5rem"
              className="flex items-center"
            >
              <p className="bg-[#FFF0E6] py-2 px-5 text-[#FC812D] font-semibold rounded-lg">
                Resurrected
              </p>
              <BsThreeDotsVertical />
            </Box>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InsightControls;
