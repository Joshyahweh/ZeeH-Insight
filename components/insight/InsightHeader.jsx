import InsightDropdown from "components/InsightDropdown";
import React from "react";
import { GoCalendar } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const InsightHeader = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <div className="font-bold text-2xl  flex items-center">
          <InsightDropdown/>
        </div>
        <div className="">
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
        </div>
      </header>
    </div>
  );
};

export default InsightHeader;
