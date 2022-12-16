import { Box, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import profileImg from "../../public/profileImg.jpeg";

const AdminProfileSetting = () => {
  return (
    <div className="text-gray-500 w-full">
      <Box>
        <h2 className="font-bold">Profile Settings</h2>
        <p className="text-gray-500 pt-3">Upate your profile settings</p>
      </Box>
      <Box>
        {/* <hr /> */}
        <ChakraProvider>
          <Grid
            // sx={{ marginLeft: "65px" }}
            templateColumns={{ md: "repeat(3, 1fr)" }}
          >
            <GridItem>
              <Box
                width={300}
                marginTop={10}
                className="py-5 flex flex-col items-center justify-center shadow-lg"
              >
                <Box>
                  <Image
                    style={{
                      borderRadius: "50%",
                      height: "10rem",
                      width: "10rem",
                    }}
                    src={profileImg}
                    alt='profile-image'
                  />
                </Box>
                <p className="text-center py-5 text-gray-500">
                  Upload a new avatar. Allowed <br />
                  *.jpeg, *.jp, *.png
                </p>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <form action="">
                  <Box
                    gap={120}
                    className="md:flex items-center justify-center pt-5 w-fit"
                  >
                    <Box className="flex flex-col gap-2 items-start">
                      <label htmlFor="">First name</label>
                      <input
                        placeholder="Enter your first name"
                        type="text"
                        name=""
                        id=""
                        className="placeholder:text-slate-400 block w-full rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        style={{ backgroundColor: "#F5F6FF", width: "150%" }}
                      />
                    </Box>
                    <Box className="flex flex-col gap-2 items-start">
                      <label htmlFor="">Last name</label>
                      <input
                        placeholder="Enter your last name"
                        type="text"
                        name=""
                        id=""
                        className="placeholder:text-slate-400 block w-full rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        style={{ backgroundColor: "#F5F6FF", width: "150%" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    gap={120}
                    className="md:flex items-center justify-center pt-10 w-fit"
                  >
                    <Box className="flex flex-col gap-2 items-start">
                      <label htmlFor="">Email Address</label>
                      <input
                        placeholder="Enter your email address"
                        type="text"
                        name=""
                        id=""
                        className="placeholder:text-slate-400 block w-full rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        style={{ backgroundColor: "#F5F6FF", width: "150%" }}
                      />
                    </Box>
                    <Box className="flex flex-col gap-2 items-start">
                      <label htmlFor="">Phone number</label>
                      <input
                        placeholder="Enter your phone number"
                        type="text"
                        name=""
                        id=""
                        className="placeholder:text-slate-400 block w-full rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        style={{ backgroundColor: "#F5F6FF", width: "150%" }}
                      />
                    </Box>
                  </Box>
                </form>
              </Box>
            </GridItem>
          </Grid>
        </ChakraProvider>
      </Box>
    </div>
  );
};

export default AdminProfileSetting;
