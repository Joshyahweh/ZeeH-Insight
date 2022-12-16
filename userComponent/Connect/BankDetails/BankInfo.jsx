import { Box, Divider, Grid, GridItem, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import gtbank from "../../../public/gtbank.png";
const BankInfo = () => {
  return (
    <div className="pt-10">
      <Box colSpan={2}>
        <div className="flex items-center gap-2">
          <Image src={gtbank} width={40} className="rounded-full" />
          <h2
            className="font-semibold sm:text-3xl "
            style={{ color: "#000d80" }}
          >
            GTBank
          </h2>
        </div>
      </Box>
      <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={25} paddingTop={10}>
        <GridItem>
          <Box width={430} className="border rounded-lg py-3 px-5 bg-[#]">
            <p className="text-gray-500">Balance</p>
            <p className="font-bold pb-5 sm:text-2xl">NGN 10,000.00</p>
            <hr />
            <p className="py-5 text-gray-500">Account ID</p>
            <label className="relative block">
              <Box className="border-slate-300 rounded-md py-2 pl-9 shadow-sm sm:text-sm border p-2 w-full">
                <p>8456f7294g28920h22678c345</p>
              </Box>
              <div
                style={{ backgroundColor: "blue" }}
                className="absolute inset-y-0 gap-2 right-2 rounded-lg cursor-pointer text-white flex items-center px-4"
              >
                <MdOutlineContentCopy />
                <p>copy</p>
              </div>
            </label>
            <div className="flex items-center justify-between">
              <p className="py-5 text-gray-500">Bank</p>
              <div className="flex items-center gap-1">
                <Image src={gtbank} width={20} className="rounded-full" />
                <p>GTBank</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-500">Account Number</p>
              <p>1234567890</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="py-5 text-gray-500">Logs</p>
              <p>2</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-500">Last modified</p>
              <p>22 April 2022, 5:08am</p>
            </div>
          </Box>
        </GridItem>
          {/* <Spacer w={90}/> */}
        <GridItem>
          <Box
            width={[400, 500, 740]}
            height="380px"
            className="w-fit border rounded-lg py-3 px-5"
          >
            <div className="flex items-center gap-8">
              <h4>History</h4>
              <h4>Transactions</h4>
            </div>
            <div className="flex items-center justify-between font-semibold text-gray-500">
              <p className="py-5">Log ID</p>
              <p>Date</p>
              <p>Balance</p>
            </div>
            <hr />
            <div className="flex items-center justify-between py-5">
              <p>8456f7294g28920h22678c345</p>
              <p>22 April 2022, 5:08am</p>
              <p>10,000.00</p>
            </div>
            <hr />
            <Box
              width={80}
              className="flex items-center text-gray-500 gap-2 my-5 rounded-lg border p-2"
            >
              <p>Next</p>
              <BsArrowRight />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default BankInfo;
