import React from "react";
import { GoCalendar } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const Welcome = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <main className="mt-2">
          <h2 className="font-bold text-2xl">Welcome back!</h2>
          <p className="pt-3">Get an insight to your finance</p>
        </main>
        <div className=" mt-7 hidden md:flex">
          <div className="flex items-center gap-4">
            <p>Filter by</p>
            <label className="relative block ">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <GoCalendar className="text-gray-500" />
              </span>
              <div className=" flex items-center bg-white text-gray-500 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm">
                <p>Last 30 days</p>
                <MdKeyboardArrowDown size={20} />
              </div>
            </label>
          </div>
        </div>
      </header>
      <hr className="w-[96rem] absolute top-36 mt-7" />
    </div>
  );
};

export default Welcome;
