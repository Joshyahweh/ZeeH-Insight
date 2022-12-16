import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import logo from "../../public/Logo.png";
import profileImg from "../../public/profileImg.jpeg";
import Image from "next/image";
import { SlHome, SlSettings } from "react-icons/sl";
import { BsGearWideConnected, BsPeople, BsPersonCheck } from "react-icons/bs";
import Link from "next/link";
import { Layers } from "react-feather";
import { CiDollar } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebarr = ({ toggleSidebar, click }) => {
  const [activePage, setActivePage] = useState(null);

  const handleActive = (e) => {
    if (!e.target.classList.value.includes("active")) {
      e.target.classList.toggle("active");
      if (activePage) {
        activePage.classList.remove("active");
        setActivePage(e.target);
      }
    }
  };

  return (
    <>
      <div>
        {
          <Sidebar
            breakPoint="md"
            backgroundColor="white"
            // breakPoint={!toggleSidebar ? "" : "md"}
          >
            <div className="  h-screen md:table-cell">
              <div className="md:flex justify-center p-10">
                <Image src={logo} alt="logo" width={50} />
              </div>
              <div>
                <div className="flex p-5 items-center justify-center gap-4 bg-gray-200 mx-5 rounded-lg py-3 mb-10">
                  <Image
                    src={profileImg}
                    alt="profile-image"
                    width={30}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4>Hudson Alvarez</h4>
                    <p className="text-gray-500">Admin</p>
                  </div>
                </div>
              </div>
              <Menu>
                <div className="flex flex-col text-gray-500">
                  <MenuItem
                    // active={window.location.pathname === "/adminDashboard/home"}
                    icon={<SlHome size={20} />}
                    routerLink={<Link href="/adminDashboard/home" />}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    icon={<BsPeople size={20} />}
                    routerLink={<Link href="/adminDashboard/customers" />}
                    onClick={handleActive}
                  >
                    Customers
                  </MenuItem>
                  <SubMenu
                    label="Products"
                    icon={<Layers size={20} strokeWidth={1} />}
                  >
                    <MenuItem
                      // active={window.location.pathname === "/adminDashboard/kyc"}
                      routerLink={<Link href="/adminDashboard/kyc" />}
                    >
                      KYC
                    </MenuItem>
                    <MenuItem
                      // active={window.location.pathname === "/adminDashboard/connect"}
                      routerLink={<Link href="/adminDashboard/connect" />}
                    >
                      Connect
                    </MenuItem>
                    <MenuItem
                      // active={window.location.pathname === "/adminDashboard/insight"}
                      routerLink={<Link href="/adminDashboard/insight" />}
                    >
                      Insight
                    </MenuItem>
                  </SubMenu>
                  <MenuItem
                    // active={window.location.pathname === "/adminDashboard/revenue"}
                    icon={<CiDollar size={20} />}
                    routerLink={<Link href="/adminDashboard/revenue" />}
                  >
                    Revenue
                  </MenuItem>
                  <MenuItem
                    // active={window.location.pathname === "/adminDashboard/settings"}
                    icon={<SlSettings size={20} />}
                    routerLink={<Link href="/adminDashboard/adminSettings" />}
                  >
                    Settings
                  </MenuItem>
                </div>
              </Menu>
            </div>
          </Sidebar>
        }
      </div>
    </>
  );
};

export default Sidebarr;
