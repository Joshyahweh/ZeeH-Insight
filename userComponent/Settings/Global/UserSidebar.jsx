import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  sidebarClasses,
} from "react-pro-sidebar";
import logo from "../../../public/Logo.png";
import profileImg from "../../../public/profileImg.jpeg";
import Image from "next/image";
import { SlHome, SlSettings } from "react-icons/sl";
import { BsGearWideConnected, BsPeople, BsPersonCheck } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const UserSidebar = () => {
  const router = useRouter();
  return (
    <Sidebar
      breakPoint="md"
      backgroundColor="#000533"
      transitionDuration={700}
      rootStyles={{
        ["." + menuClasses.button]: {
          backgroundColor: undefined,
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#000533",
          },
        },
      }}
    >
      <div className="h-screen">
        <div className="flex justify-center p-10">
          <Image src={logo} alt="logo" width={50} />
        </div>
        <div>
          <div className="flex items-center justify-center gap-4  shadow-lg text-white mx-5 rounded-lg py-3 mb-10 bg-[#191E47]">
            <Image
              src={profileImg}
              alt="profile-image"
              width={30}
              className=""
              style={{
                borderRadius: "50%",
                height: "2rem",
                width: "2rem",
              }}
            />
            <div className="flex flex-col">
              <h4>Hudson Alvarez</h4>
              <p>#739002</p>
            </div>
          </div>
        </div>
        <Menu>
          <div className="flex flex-col text-gray-500">
            <MenuItem
              rootStyles={{
                ["." + menuClasses.button]: {
                  backgroundColor:
                    router.asPath === "/dashboard" ? "#191E47" : "",
                  color: router.asPath === "/dashboard" ? "#ffffff" : "",
                },
              }}
              icon={<SlHome size={20} />}
              routerLink={
                <Link
                  href="/dashboard"
                  // className={
                  //   router.asPath === "/dashboard/" ? "bg-red-900" : "bg-red-500"
                  // }
                />
              }
            >
              Dashboard
            </MenuItem>
            <MenuItem
              rootStyles={{
                ["." + menuClasses.button]: {
                  backgroundColor:
                    router.asPath === "/dashboard/connect" ? "#191E47" : "",
                  color:
                    router.asPath === "/dashboard/connect" ? "#ffffff" : "",
                },
              }}
              icon={<BsPeople size={20} />}
              routerLink={<Link href="/dashboard/connect" />}
            >
              Connect
            </MenuItem>

            <MenuItem
              rootStyles={{
                ["." + menuClasses.button]: {
                  backgroundColor:
                    router.asPath === "/dashboard/settings" ? "#191E47" : "",
                  color:
                    router.asPath === "/dashboard/settings" ? "#ffffff" : "",
                },
              }}
              icon={<SlSettings size={20} />}
              routerLink={<Link href="/dashboard/settings" />}
            >
              Settings
            </MenuItem>
          </div>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default UserSidebar;
