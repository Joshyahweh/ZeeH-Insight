import React from "react";
import amico from "../public/amico.png";
import  Link  from "next/link";
import { BsDot } from "react-icons/bs";
import designTop from "../public/Design.png";
import designBottom from "../public/DesignBottom.png";
import Image from "next/image";

const ResetPasswordEmailConfirm = () => {
  return (
    <div>
      <div className="sm:flex items-end justify-end hidden absolute top-0 right-0">
        <Image src={designTop} alt="" width={120} />
      </div>
      <main className="text-center">
        <div className="sm:mx-[32%] py-20 m-8">
          <div className="flex justify-center">
            <Image src={amico} alt="amico" width={120} />
          </div>
          <h2 className="font-bold text-2xl py-5">Check your mail</h2>
          <p className="text-gray-500 pb-4">
            We have sent your password recover <br />
            instructions to your email
          </p>
          <div className="grid">
            <button className="bg-blue-700 text-white py-5 rounded-md">
              Open mail app
            </button>
          </div>
          <p className="font-semibold pt-5 text-blue-700 text-center">
            Skip I will confirm later
          </p>
        </div>
        <p className="text-gray-500 pt-14 pb-5 text-center">
          Have an account?{" "}
          <Link href="/login" className="text-blue-700 font-semibold">
            Sign in
          </Link>{" "}
        </p>
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
      <div className="hidden sm:flex absolute bottom-0 left-0">
        <Image src={designBottom} alt="" width={120} />
      </div>
    </div>
  );
};

export default ResetPasswordEmailConfirm;
