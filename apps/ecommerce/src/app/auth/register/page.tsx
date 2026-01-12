"use client";
import React, { useState } from "react";
import Input from "../../../../../../libs/ui/src/components/Input";

import { Key, Mail, Phone, User } from "lucide-react";
import { FaFacebook, FaGoogle, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";




const Page = () => {
  const router = useRouter();



  const [service, setService] = useState("ecommerce");
  const [username, setUsername] = useState("Aditya verma");
  const [email, setEmail] = useState("adityaverma4648@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("6261997767");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [password, setPassword] = useState("Clearity@1");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [registrationAsTrue, setRegistrationAsTrue] = useState(false);
  const [verificationAsTrue, setVerificationAsTrue] = useState(false);

  const handleRegister = async () => {
    setErrorMsg("");
    setSuccessMsg("");

    // Basic validation
    if (!username || !email || !phoneNumber || !password) {
      setErrorMsg("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`http://localhost:8000/auth/register`, {
        name: username,
        email,
        phone_number: phoneNumber,
        phone_code: phoneCode,
        password,
        service,
      });

      setSuccessMsg(`Registration successful! - ${res.data?.message}`);
      setRegistrationAsTrue(true);
    } catch (err: any) {
      console.log(err);
      setErrorMsg(err.response?.data?.message || "Registration failed.");
      setRegistrationAsTrue(false);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterationVerification = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    if (!otp) {
      setErrorMsg("Validation error : OTP is not valid!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `http://localhost:8000/auth/verify-registration`,
        {
          name: username,
          email,
          otp,
          service,
          phone_number: phoneNumber,
          phone_code: phoneCode,
          password,
        }
      );

      setSuccessMsg(`Verification successful! - ${res.data?.message}`);
      setVerificationAsTrue(true);

      localStorage.setItem("token", res.data.user?.token); // JWT
      localStorage.setItem("loginTime", new Date().toISOString());

      router.push("/");
    } catch (error: any) {
      setErrorMsg(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-[80vw] md:w-[80vw] w-[90vw] h-full dark:bg-neutral-900 bg-neutral-100 dark:text-white text-black flex justify-center items-center">
      <div className="w-2/3 md:flex hidden justify-center items-center"></div>

      <div className="lg:w-1/3 md:w-1/2 w-full h-full flex flex-col justify-center items-center gap-y-8 dark:text-neutral-400 text-gray-600">
        <div className="w-10/12 flex flex-col gap-y-2">
          <h2 className="h3 font-bold text-3xl dark:text-white text-black">
            Register as a Customer
          </h2>

          <div className="w-full flex gap-x-2">
            Already have an account?
            <Link href="/auth/login" className="text-green-600 font-medium">
              Login
            </Link>
          </div>
        </div>

        {registrationAsTrue ? (
          <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <Input
              contClassName="w-10/12 relative"
              label={"Enter a secure OTP"}
              phoneCode={false}
              className="w-full relative flex justify-center items-center"
              name="otp"
              placeholder="OTP"
              inputType="text"
              value={otp}
              onChange={(e: any) => {
                setOtp(e.target.value);
              }}
              icon={<Key />}
            />
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <Input
              contClassName="w-10/12 relative"
              label={"Your Username"}
              phoneCode={false}
              className="w-full relative flex justify-center items-center "
              placeholder="username"
              inputType="text"
              name="name"
              value={username}
              onChange={(e: any) => {
                setUsername(e.target.value);
              }}
              icon={<User />}
            />

            <Input
              contClassName="w-10/12 relative"
              label={"Your Email"}
              phoneCode={false}
              className="w-full relative flex justify-center items-center "
              placeholder="name@gmail.com"
              inputType="text"
              name="email"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              icon={<Mail />}
            />

            <Input
              contClassName="w-10/12 relative"
              label={"Mobile Number"}
              phoneCode={true}
              className="w-full relative flex justify-center items-center "
              placeholder="1234567890"
              inputType="text"
              name="phone_number"
              value={phoneNumber}
              onChange={(e: any) => {
                setPhoneNumber(e.target.value);
              }}
              icon={<Phone />}
            />

            <Input
              contClassName="w-10/12 relative"
              label={"Your Password"}
              phoneCode={false}
              className="w-full relative flex justify-center items-center "
              placeholder="password"
              value={password}
              name="password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              inputType="password"
              icon={<Key />}
            />
          </div>
        )}

        <div className="w-10/12 flex flex-col justify-start items-center">
          <div className="w-full flex gap-x-1.5">
            <input type="checkbox" name="checkbox" className="text-xl p-4" />

            {/* linking privacy Page */}
            <div className="flex gap-x-2">
              <div>I agree to the</div>
              <Link href="#" className="text-green-600 font-medium">
                Terms & condition
              </Link>
            </div>
          </div>
        </div>

        <div className="w-10/12 text-gray-100">
          {registrationAsTrue ? (
            <button
              type="button"
              className="w-full py-3 bg-green-600 rounded-md flex justify-center items-center"
              onClick={() => handleRegisterationVerification()}
            >
              Verify
            </button>
          ) : (
            <button
              type="button"
              disabled={loading ? true : false}
              className="w-full py-3 bg-green-600 rounded-md flex justify-center items-center"
              onClick={() => handleRegister()}
            >
              {loading ? (
                <FaSpinner color="#fff" className="animate-spin" />
              ) : (
                "Register"
              )}
            </button>
          )}
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
           




           {/*  breaking news on the vendor authentication */}
        {/* <div className="w-10/12 flex flex-col justify-center items-start">
          <div>
            We are presenting the golden opportunity to all the proud business
            owners to become an independent e-vendor representing your
            speciality!
          </div>

          <div className="font-medium text-green-600">Register as a Vendor</div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
