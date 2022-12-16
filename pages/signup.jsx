import React from "react";
import Link from "next/link";
import integrateImg from "../public/integration.png";
import logo from "../public/Logo.png";
import Image from "next/image";
const Signup = () => {
  return (
    <div>
      <main className=" sm:grid md:grid-cols-2 lg:grid-cols-5">
        <div className="items-center lg:col-span-2 bg-[#808CFF] hidden md:flex flex-col justify-center w-full text-white">
          <Image src={integrateImg} alt="" width={150} />
          <h2 className="text-2xl font-bold py-5">
            One Integration, <br />
            multiply services.
          </h2>
          <p>
            Seamless access to customers biodata and <br />
            financial history in record time.
          </p>
        </div>
        <div className="px-10  lg:col-span-3 pt-10 md:px-14 lg:px-28">
          <div className="flex justify-center md:justify-start">
            <Image src={logo} alt="logo" />
          </div>
          <h2 className="text-center md:text-start font-bold pt-5">
            Welcome to ZeeH
          </h2>
          <p className="text-center md:text-start text-gray-500 pb-10">
            Let&apos;s get you up an running with ZeeH insight
          </p>
          <form className="grid grid-rows-4 gap-4">
            <label htmlFor="" className="grid justify-items-start">
              Email
            </label>
            <input
              type="email"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
              placeholder="johndoe@gmail.com"
              size={40}
              width="auto"
              required
            />
            <label htmlFor="" className="grid justify-items-start">
              Password
            </label>
            <input
              type="password"
              placeholder="at least 8 characters"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
              size={50}
              width="auto"
              required
            />
            <label htmlFor="" className="grid justify-items-start">
              BVN
            </label>
            <input
              type="number"
              placeholder="at least 8 characters"
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
              size={50}
              width="auto"
              required
            />
            <div className="flex items-center justify-between w-full">
              <p className="text-[10px] md:text-[15px] flex items-center gap-4">
                <input
                  type="checkbox"
                  className="default:ring-2 required:border-red-500"
                />
                I agree to ZeeH&apos;s terms and conditions and Privacy policy.
              </p>
              <Link
                href="/reset-password"
                className="text-[10px] md:text-[15px]"
              >
                Forgot password?
              </Link>
            </div>
            <button className="bg-blue-700 text-white py-5 rounded-md">
              Sign up
            </button>
          </form>
          <p className="pt-5">
            Have an account?{" "}
            <Link href="/login" className="text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
