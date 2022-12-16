import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { GoCalendar } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between ">
        <main className="">
          <h2 className="font-bold text-2xl">Connect</h2>
          <p className="pt-5">Banks connected (3)</p>
        </main>
        <Box
          sx={{ backgroundColor: "#0019FF" }}
          className="text-white py-2 sm:py-3 px-5  rounded-lg"
        >
          <button>Link account</button>
        </Box>
      </header>
      {/* <Box>
        <hr />
      </Box> */}
    </div>
  );
};

export default Header;
