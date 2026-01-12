"use client";
import React, { useState } from "react";
import Input from "../../../../../../libs/ui/src/components/Input";

import { Key, Mail } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import _countryCode from "../../../../public/data/countryCode.json";


const Page = () => {

  const [username, setUsername] = useState("");

  return (
    <div className="lg:w-[80vw] md:w-[80vw] w-[90vw] h-[80vh] text-black dark:text-white flex justify-center items-center">
      <div className="w-2/3 md:flex hidden justify-center items-center"></div>

      <div className="lg:w-1/3 md:w-1/2 w-full h-full flex flex-col justify-center items-center gap-y-10 dark:text-neutral-400 text-neutral-600">
        <div className="w-10/12 flex flex-col gap-y-2">
          <h2 className="h3 font-bold text-3xl dark:text-white text-black">
            Login as a Customer
          </h2>

          <div className="w-full flex gap-x-2">
            Don't have an account?
            <Link href="/auth/register" className="text-green-600 font-medium">Register</Link>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-y-2">
          <Input
          
            contClassName="w-10/12 relative"
            label={"Your Email"}
            phoneCode={false}
            className="w-full relative flex justify-center items-center "
            placeholder="name@gmail.com"
            inputType="text"
            value=""
            name="name"
            onChange={()=>{}}
            icon={<Mail />}
          />

          <Input
            contClassName="w-10/12 relative"
            label={"Your Password"}
            phoneCode={false}
            className="w-full relative flex justify-center items-center"
            value=""
            onChange={()=>{}}
            placeholder="********"
            name="password"
            inputType="password"
            icon={<Key />}
          />
        </div>

        <div className="w-10/12 text-gray-100">
          <button
            type="button"
            className="w-full py-3 bg-green-600 rounded-md flex justify-center items-center"
          >
            Login
          </button>
        </div>

        <div className="w-10/12 flex justify-center items-center font-bold">
          <h2>Or</h2>
        </div>

        <div className="w-10/12 flex justify-center items-center gap-x-2 text-gray-100">
          <button
            type="button"
            className="w-1/2 px-10 py-3 bg-green-600 rounded-md flex justify-center items-center gap-x-2"
          >
            <FaGoogle />
            Google
          </button>
          <button
            type="button"
            className="w-1/2 px-10 py-3 bg-green-600 rounded-md flex justify-center items-center gap-x-2"
          >
            <FaFacebook />
            Facebook
          </button>
        </div>

   

   {/*  breking news on vendor login */}
        {/* <div className="w-10/12 flex flex-col justify-center items-start">
          <div>
            We are presenting the golden opportunity to all the proud business
            owners to become an independent e-vendor representing your
            speciality!
          </div>

          <div className="font-medium text-green-600">Login as a Vendor</div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
