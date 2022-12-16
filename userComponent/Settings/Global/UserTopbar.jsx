import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { useProSidebar } from "react-pro-sidebar";
import profileImg from "../../../public/profileImg.jpeg";

const UserTopbar = ({ click }) => {
  const { toggleSidebar } = useProSidebar();
  return (
    <div className="">
      <div className="md:flex items-center w-full">
        <main
          className="hidden md:flex md:
        my-8 mx-[30rem]"
        >
          <label className="relative block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <BsSearch className="text-gray-500" />
            </div>
            <input
              className="placeholder:text-slate-400 block bg-gray-200 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
        </main>
        <div className="flex items-center justify-between">
          <div
            className="md:hidden m-10 cursor-pointer"
            onClick={() => toggleSidebar(click)}
          >
            <AiOutlineMenu />
          </div>
          <main className="flex items-center justify-between pr-7 ">
            <div className="flex gap-4  items-center">
              <div className="flex flex-col items-end ">
                <p className="bg-[#FF5630] h-4 w-4  text-center relative top-2 left-1  text-[10px] rounded-full text-white">
                  8
                </p>
                <IoNotifications className="text-gray-500 w-4 h-4" />
              </div>
              <Image
                src={profileImg}
                width={30}
                alt="profile-image"
                className="rounded-full"
              />
            </div>
          </main>
        </div>
      </div>
      {/* <hr className="w-[83.5%] absolute top-24" /> */}
      {/* <Box position="absolute" w={[580, 500, 1280]} top="12rem">
        <hr />
      </Box>
      <Box position="absolute" w={[580, 500, 1280]} top="5rem">
        <hr />
      </Box> */}
    </div>
  );
};

export default UserTopbar;
