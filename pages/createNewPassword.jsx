import React from "react";
import Link from "next/link";
import logo from "../public/Logo.png";
import { BsDot } from "react-icons/bs";
import designTop from "../public/Design.png";
import designBottom from "../public/DesignBottom.png";
import Image from "next/image";

const CreateNewPassword = () => {
  return (
    <div>
      <div className="md:flex items-end justify-end hidden absolute right-0 top-0">
        <Image src={designTop} alt="" width={120} />
      </div>
      <main className="text-center">
        <div className="mx-10 md:mx-36 lg:mx-[32%] mt-16 mb-10 py-16 border px-10 rounded-md shadow-lg">
          <div className="flex justify-center">
            <Image src={logo} alt="" />
          </div>
          <h2 className="font-bold text-2xl pt-4">Create New Password</h2>
          <p className="text-gray-500">
            Your new password must be different from your previous used
            passwords
          </p>
          <label htmlFor="" className="grid justify-items-start py-5">
            Password
          </label>
          <form className="grid grid-rows-2 gap-4">
            <input
              type="password"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
              placeholder="at least 8 characters"
              size={40}
              width="auto"
              required
              minLength={8}
            />
            <label htmlFor="" className="grid justify-items-start">
              Email
            </label>
            <input
              type="password"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
              placeholder="at least 8 characters"
              size={40}
              width="auto"
              required
              minLength={8}
            />
            <button className="bg-blue-700 text-white py-5 rounded-md">
              Sign in
            </button>
            <Link href="/login" className="text-blue-700 font-semibold">
              Return to login
            </Link>
          </form>
        </div>
        <div className="flex items-center justify-center gap-5 text-gray-500">
          <p>&copy;Zeeh Africa 2022</p>
          <div className="flex items-end">
            <BsDot />
            <p>Contact</p>
          </div>
          <div className="flex items-end">
            <BsDot />
            <p>Privacy policy</p>
          </div>
        </div>
      </main>
      <div className="hidden md:flex absolute bottom-0 left-0">
        <Image src={designBottom} alt="" width={120} />
      </div>
    </div>
  );
};

export default CreateNewPassword;
