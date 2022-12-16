import { Box, Center, ChakraProvider, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { MdCreditScore, MdOutlinePeopleOutline } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineReload } from "react-icons/ai";

const MetricsDisplay = () => {
  return (
    <ChakraProvider>
    <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap={25} paddingTop="10%" className="w-full">
      <GridItem   h="150" bg="#E2E5FF" rounded={15} >
        <Box
          className=" bg-[#E2E5FF] rounded-2xl text-center justify-center flex items-center gap-12 py-6"
          paddingX={75}
        >
      {/* <Spacer w={50}/> */}
          <div className="align-middle">
            <HiOutlineInboxStack
              className="dash-1 text-[#5566FF] my-5 p-2 rounded-full"
              size={40}
            />
          </div>
          <div className="text-[#0011AA]">
            <div className="flex items-center">
              <TbCurrencyNaira size={35} />
              <h2 className="text-3xl font-bold ">8000.00</h2>
            </div>
            <p>Affordability</p>
          </div>
        </Box>
      </GridItem>
      <GridItem  h="150" bg="#CAFDF5" rounded={15}>
        <Box
          className=" bg-[#CAFDF5] text-center rounded-2xl  justify-center flex items-center gap-12 py-6"
          paddingX={75}
        >
          <div className="align-middle">
            <MdCreditScore
              className="dash-2 text-[#006C9C] my-5 p-2 rounded-full"
              size={40}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#003768]">40</h2>
            <p className="text-[#003768]">Credit Score</p>
          </div>
          <AiOutlineReload />
        </Box>
      </GridItem>
      <GridItem  h="150" bg="#FFF0E6" rounded={15}>
        <Box
          className=" bg-[#FFF0E6] rounded-2xl  justify-center flex items-center gap-12 py-6 text-center"
          paddingX={75}
        >
          <div className="align-middle">
            <MdOutlinePeopleOutline
              className="dash-3 text-[#FC812D] my-5 p-2 rounded-full"
              size={40}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#FC812D]">3</h2>
            <p className="text-[#FC812D]">Bank connected</p>
          </div>
        </Box>
      </GridItem>
    </Grid>
    </ChakraProvider>
  );
};

export default MetricsDisplay;
// className="" w={['73%', '70%', '100%']}