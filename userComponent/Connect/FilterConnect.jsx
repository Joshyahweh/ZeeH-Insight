import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { BsFillRecordCircleFill, BsFunnel } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

export default function FilterConnect() {
  return (
    <div className="">
      {/* Menu */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-[#1F3C71] text-white px-4 py-3 text-sm font-medium shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 gap-1 items-center">
            <BsFunnel />
            Filter
            <p className="bg-white text-[#1F3C71] rounded-full w-5  h-5">2</p>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <div className="flex items-center justify-between py-2 px-5">
                <p className="font-bold">Filters</p>
                <p className="font-semibold text-[#1F3C71]">Apply</p>
              </div>
              <hr />

              <Menu.Item disabled>
                <label htmlFor="check-box-1" className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    id="check-box-1"
                    className="ml-6 appearance-none border-2 h-5 w-5 rounded-full border-[#1F3C71]"
                  />
                  <FaCircle
                    className="absolute left-7 opacity-0 check-1 transition text-[#1F3C71]"
                    size={11}
                  />
                  <span
                    className="bg-white text-gray-700
                        block px-4 py-2 text-sm"
                  >
                    Status
                  </span>
                </label>
              </Menu.Item>
              <Menu.Item disabled>
                <label htmlFor="check-box-2" className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    id="check-box-2"
                    className="ml-6 appearance-none border-2 h-5 w-5 rounded-full border-[#1F3C71]"
                  />
                  <FaCircle
                    className="absolute left-7 opacity-0 check-1 transition text-[#1F3C71]"
                    size={11}
                  />
                  <span
                    className="bg-white text-gray-700
                        block px-4 py-2 text-sm"
                  >
                    Email
                  </span>
                </label>
              </Menu.Item>
              <Menu.Item disabled>
                <label htmlFor="check-box-3" className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    id="check-box-3"
                    className="ml-6 appearance-none border-2 h-5 w-5 rounded-full border-[#1F3C71]"
                  />
                  <FaCircle
                    className="absolute left-7 opacity-0 check-1 transition text-[#1F3C71]"
                    size={11}
                  />
                  <span
                    className="bg-white text-gray-700
                        block px-4 py-2 text-sm"
                  >
                    Date Range
                  </span>
                </label>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
