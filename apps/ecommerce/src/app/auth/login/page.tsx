"use client";
import React, { useState, ChangeEvent } from "react";
import { Input } from "../../../../../../libs/ui/src/components/input";

import { Key, Mail } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import _countryCode from "../../../../public/data/countryCode.json";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <Link href="/auth/register" className="text-green-600 font-medium">
              Register
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-y-2">
          <Input
            type="input"
            containerClassName="w-10/12 relative"
            label="Email"
            iconVisibility={true}
            icon={<Mail className="absolute top-[10px] left-[10px]" />}
            inputType="text"
            placeholder="name@gmail.com"
            optionData={<></>}
            inputContainerClassName="w-full "
            labelClassName="block mb-2.5 text-sm font-medium text-heading"
            className={`flex-1 block ps-12 pe-3 py-3 dark:text-white text-black dark:bg-neutral-700 bg-neutral-200 border dark:border-neutral-600 border-neutral-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:dark:text-neutral-200 placeholder:text-neutral-600 text-right`}
            phoneCode={false}
            value={formData.email}
            name="email"
            onChange={(e) => {handleChange(e)}}
          />

          <Input
            type="input"
            containerClassName="w-10/12 relative"
            label="Password"
            iconVisibility={true}
            icon={<Key className="absolute top-[10px] left-[10px]" />}
            inputType="password"
            placeholder="*************"
            optionData={<></>}
            inputContainerClassName="w-full"
            labelClassName="block mb-2.5 text-sm font-medium text-heading"
            className={`flex-1 block ps-12 pe-3 py-3 dark:text-white text-black dark:bg-neutral-700 bg-neutral-200 border dark:border-neutral-600 border-neutral-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:dark:text-neutral-200 placeholder:text-neutral-600 text-right`}
            phoneCode={false}
            value={formData.password}
            name="password"
            onChange={(e) => {handleChange(e)}}
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
