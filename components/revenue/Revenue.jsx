import React from "react";
import { GoCalendar } from "react-icons/go";
import {
  MdKeyboardArrowDown,
  MdOutlineArrowForwardIos,
  MdOutlinePeopleOutline,
} from "react-icons/md";
import Control from "components/Control";
import { TbCurrencyNaira } from "react-icons/tb";

const Revenue = () => {
  return (
    <div>
      <main className="m-10">
        <header className="flex items-center justify-between">
          <h2 className="font-bold text-2xl capitalize">Revenue</h2>
          <div className="flex items-center gap-4">
            <p>Filter by</p>
            <label className="relative block ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <GoCalendar className="text-gray-500" />
              </span>
              <div className=" flex items-center bg-white text-gray-500 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm">
                <p>Last 30 days</p>
                <MdKeyboardArrowDown size={20} />
              </div>
            </label>
          </div>
        </header>
        {/* Board */}
        <div className="flex flex-col  sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-8 text-center py-5  lg:w-full">
          <main className=" bg-[#E2E5FF] rounded-2xl px-5  justify-center flex items-center gap-10 py-6">
            <div className="align-middle">
              <MdOutlinePeopleOutline
                className="dash-1 text-[#5566FF] my-5 p-2 rounded-full"
                size={40}
              />
            </div>
            <div>
              <div className="flex items-center text-[#0011AA]">
                <TbCurrencyNaira size={35} />
                <h2 className="text-3xl font-bold ">100000</h2>
              </div>
              <p className="text-[#0011AA]">
                Total Revenue
                <br />
                generated
              </p>
            </div>
          </main>
          <main className=" bg-[#CAFDF5] rounded-2xl px-5  justify-center flex items-center gap-10 py-6">
            <div className="align-middle">
              <MdOutlinePeopleOutline
                className="dash-2 text-[#006C9C] my-5 p-2 rounded-full"
                size={40}
              />
            </div>
            <div>
              <div className="flex items-center text-[#003768]">
                <TbCurrencyNaira size={35} />
                <h2 className="text-3xl font-bold ">16000</h2>
              </div>
              <p className="text-[#003768]">
                Monthly Revenue <br />
                growth
              </p>
            </div>
          </main>
          <main className=" bg-[#FFF0E6] rounded-2xl px-5  justify-center flex items-center gap-10 py-6">
            <div className="align-middle">
              <MdOutlinePeopleOutline
                className="dash-3 text-[#FC812D] my-5 p-2 rounded-full"
                size={40}
              />
            </div>
            <div>
              <div className="flex items-center text-[#FC812D]">
                <TbCurrencyNaira size={35} />
                <h2 className="text-3xl font-bold ">5000</h2>
              </div>
              <p className="text-[#FC812D]">
                Total Revenue <br />
                (KYC)
              </p>
            </div>
          </main>
          <main className=" bg-[#FFE9D5] rounded-2xl px-5  justify-center flex items-center gap-10 py-6">
            <div className="align-middle">
              <MdOutlinePeopleOutline
                className="dash-4 text-[#7A0916] my-5 p-2 rounded-full"
                size={40}
              />
            </div>
            <div>
              <div className="flex items-center text-[#7A0916]">
                <TbCurrencyNaira size={35} />
                <h2 className="text-3xl font-bold ">8000</h2>
              </div>
              <p className="text-[#7A0916]">
                Total Revenue <br />
                (Connect)
              </p>
            </div>
          </main>
        </div>
        <Control />
      </main>
    </div>
  );
};

export default Revenue;
