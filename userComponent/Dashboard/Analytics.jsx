import { Box, Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Analytics = () => {
  return (
    <Grid
      templateColumns={{ md: "repeat(18, 1fr)" }}
      gap={25}
      paddingTop="3%"
    >
      <GridItem colSpan={12}>
        <Box className=" flex md:w-full justify-between border rounded-lg p-3">
          <Box>
            <h4 className="font-bold">Bank Analytics</h4>
            <p className="text-gray-500">All connected banks (3)</p>
          </Box>
          {/* <Spacer /> */}
          <Box
            className="flex items-center"
            sx={{
              backgroundColor: "#F6F7F8",
              paddingX: "10px",
              borderRadius: "10px",
            }}
          >
            <p>First Bank</p>
            <MdKeyboardArrowDown size={20} />
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={6}>
        <Box className=" sm:w-full border rounded-lg p-3 ">
          <Box
            className=" gap-12 flex  box-border "
            // width="fit-content"
            // overflowX="hidden"
          >
            <Box>
              <h4 className="font-bold">Money Flow</h4>
            </Box>
            <Spacer w={[0, 0, 90]}/>
            <Box
              className="flex items-center"
              sx={{
                backgroundColor: "#F6F7F8",
                paddingX: "15px",
                paddingY: "5px",
                borderRadius: "10px",
              }}
            >
              <p>Year</p>
              <MdKeyboardArrowDown size={20} />
            </Box>
          </Box>
          <p className="text-gray-500">
            Monitor your money flow across <br />
            all banks
          </p>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Analytics;
