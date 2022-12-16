import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { BsFillCircleFill, BsFunnel } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { MdOutlinePeopleOutline, MdKeyboardArrowDown } from "react-icons/md";

const HomeDetails = () => {
  return (
    <div>
      <header>
        <Box className=" m-10  ">
          <div className="flex items-center justify-between w-full">
            <div className="flex item-center justify-between">
              <h2 className="font-bold text-2xl ">Welcome back!</h2>
              {/* <BsFunnel /> */}
            </div>
            <div className="">
              <div className=" hidden md:flex items-center gap-4">
                <p>Filter by</p>
                <label className="relative block ">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <GoCalendar className="text-gray-500" />
                  </span>
                  <div className=" flex items-center bg-white text-gray-500 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm">
                    <p>Last 30 days</p>
                    <MdKeyboardArrowDown size={20} />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-8 text-center py-5 lg:w-full">
            <main className=" bg-[#E2E5FF] rounded-2xl px-[3.2rem] py-10">
              <div className="flex justify-center">
                <MdOutlinePeopleOutline
                  className="dash-1 text-[#5566FF] my-5 p-2 rounded-full"
                  size={40}
                />
              </div>
              <h2 className="text-2xl font-bold text-[#0011AA]">1000</h2>
              <p className="text-[#0011AA]">Total Customers</p>
            </main>
            <main className=" bg-[#CAFDF5] rounded-2xl px-[3.2rem] py-10">
              <div className="flex justify-center">
                <MdOutlinePeopleOutline
                  className="dash-2 text-[#006C9C] my-5 p-2 rounded-full"
                  size={40}
                />
              </div>
              <h2 className="text-2xl font-bold text-[#003768]">160</h2>
              <p className="text-[#003768]">Total Customers</p>
            </main>
            <main className=" bg-[#FFF0E6] rounded-2xl px-[3.2rem] py-10">
              <div className="flex justify-center">
                <MdOutlinePeopleOutline
                  className="dash-3 text-[#FC812D] my-5 p-2 rounded-full"
                  size={40}
                />
              </div>
              <h2 className="text-2xl font-bold text-[#FC812D]">1000</h2>
              <p className="text-[#FC812D]">Total Customers</p>
            </main>
            <main className=" bg-[#FFE9D5] rounded-2xl px-[3.2rem] py-10">
              <div className="flex justify-center">
                <MdOutlinePeopleOutline
                  className="dash-4 text-[#7A0916] my-5 p-2 rounded-full"
                  size={40}
                />
              </div>
              <h2 className="text-2xl font-bold text-[#7A0916]">1000.00</h2>
              <p className="text-[#7A0916]">Total Customers</p>
            </main>
          </div>
          <div className=" rounded-lg pr-[45rem] text-gray-500 bg-slate-100 p-10 scroll-smooth w-full overflow-x-scroll max-w-full">
            <h3 className="text-[#2B40FF]">Customer Chart Flow</h3>
            <div className="flex items-center gap-5 py-10">
              <div className="flex items-center gap-2">
                <BsFillCircleFill className="text-[#0011AA]" />
                <p>New Active Users</p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCircleFill className="text-[#FD9A57]" />
                <p>Churned Users</p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillCircleFill className="text-[#5566FF]" />
                <p>Resurrected Users</p>
              </div>
            </div>
          </div>
        </Box>
      </header>
      {/* Chart */}
    </div>
  );
};

export default HomeDetails;
