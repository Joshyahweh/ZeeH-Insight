import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { GoCalendar } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";

const HeaderBankDetails = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <main className=" mt-2">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-2xl text-gray-500">Connect</h2>
            <SlArrowRight />
            <h2 className="font-bold text-2xl">GT Bank</h2>
          </div>

          <p className="pt-3 text-gray-500">Banks connected (3)</p>
        </main>
        <Box
          sx={{ backgroundColor: "#0019FF" }}
          className="mt-7 text-white py-3 px-5 rounded-lg"
        >
          <button>Link account</button>
        </Box>
      </header>
      {/* <Box position="" width="full">
        <hr />
      </Box> */}
    </div>
  );
};

export default HeaderBankDetails;
