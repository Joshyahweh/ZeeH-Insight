import React from "react";
import logo from "../../public/Logo.png";
import Link from "next/link";
import designTop from "../../public/Design.png";
import designBottom from "../../public/DesignBottom.png";
import Image from "next/image";


const Login = () => {
  
  return (
    <>
      <div className="sm:flex items-end justify-end hidden">
        <Image src={designTop} alt="" width={120} />
      </div>
      <div className="w-full h-full p-10 sm:p-0">
        <main className="grid grid-rows-2 justify-items-center gap-4">
          <Image src={logo} alt="logo" />
          <h2 className="font-bold">Hi, Welcome Back</h2>
          <div>
            <form className="grid grid-rows-4 gap-4">
              <label htmlFor="" className="grid justify-items-start">
                Email
              </label>
              <input
                type="email"
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm "
                placeholder="johndoe@gmail.com"
                size={50}
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
              <div className="flex items-center justify-between w-full">
                <p className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="default:ring-2 required:border-red-500"
                  />
                  Remember me
                </p>
                <Link href='/resetPassword'>Forgot password?</Link>
              </div>
              <button className="bg-blue-700 text-white py-5 rounded-md">
                Sign in
              </button>
            </form>
          </div>
        </main>
      </div>
      <div className="hidden sm:flex absolute bottom-0">
        <Image src={designBottom} alt="" width={120} />
      </div>
    </>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
