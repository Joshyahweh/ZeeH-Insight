import React from "react";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import InsightControls from "./InsightControls";

const InsightBoard = () => {
  return (
    <div>
      <div className="flex flex-col  sm:grid lg:grid-cols-4 sm:grid-cols-2 gap-8 text-center py-5 lg:w-full ">
        <main className=" bg-[#E2E5FF] rounded-2xl px-11  justify-center flex items-center gap-10 py-6">
          <div className="align-middle">
            <MdOutlinePeopleOutline
              className="dash-1 text-[#5566FF] my-5 p-2 rounded-full"
              size={40}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0011AA]">1000</h2>
            <p className="text-[#0011AA]">Total No. of <br/>Customers</p>
          </div>
        </main>
        <main className=" bg-[#CAFDF5] rounded-2xl px-11  justify-center flex items-center gap-10 py-6">
          <div className="align-middle">
            <MdOutlinePeopleOutline
              className="dash-2 text-[#006C9C] my-5 p-2 rounded-full"
              size={40}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#003768]">60</h2>
            <p className="text-[#003768]">Total No. of <br/>Companies</p>
          </div>
        </main>
        <main className=" bg-[#FFF0E6] rounded-2xl  px-11 justify-center flex items-center gap-10 py-6">
          <div className="align-middle">
            <MdOutlinePeopleOutline
              className="dash-3 text-[#FC812D] my-5 p-2 rounded-full"
              size={40}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#FC812D]">5000</h2>
            <p className="text-[#FC812D]">Total No. of <br/>linked accounts</p>
          </div>
        </main>
        <main className=" bg-[#FFE9D5] rounded-2xl px-11  justify-center flex items-center gap-10 py-6">
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
              generated
            </p>
          </div>
        </main>
      </div>
      <InsightControls />
    </div>
  );
};

export default InsightBoard;
