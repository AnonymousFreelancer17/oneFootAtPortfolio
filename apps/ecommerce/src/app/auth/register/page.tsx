"use client";
import React, { useState, ChangeEvent, useRef } from "react";
import { Input } from "../../../../../../libs/ui/src/components/input";

import { Key, Mail, User2 } from "lucide-react";
import { FaFacebook, FaGoogle, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [service, setService] = useState("ecommerce");
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    service: service,
    email: "",
    username: "",
    password: "",
  });
  const submittingRef = useRef(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [registrationAsTrue, setRegistrationAsTrue] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (submittingRef.current) return;
    submittingRef.current = true;

    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        {
          name: formData.username,
          email: formData.email,
          service: formData.service,
        },
        {
          timeout: 15000, // ⏱ increase timeout
        },
      );

      setRegistrationAsTrue(true);
      setSuccessMsg(res.data?.message || "OTP sent");
    } catch (err: any) {
      setErrorMsg(
        err.response?.data?.message || err.message || "Registration failed",
      );
    } finally {
      setLoading(false);
      submittingRef.current = false;
    }
  };

  const handleRegisterationVerification = async (e: any) => {
    e.preventDefault();
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
          email: formData.email,
          service: formData.service,
          otp,
        },
        {
          timeout: 1000,
        },
      );

      setSuccessMsg(`Verification successful! - ${res.data?.message}`);

      localStorage.setItem("token", res.data.user?.token); // JWT
      localStorage.setItem("loginTime", new Date().toISOString());

      router.push("/");
    } catch (error: any) {
      setErrorMsg(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const ResendOtp = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    if (!otp) {
      setErrorMsg("Validation error : OTP is not valid!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`http://localhost:8000/auth/resend-OTP`, {
        formData,
      });

      setSuccessMsg(`Verification successful! - ${res.data?.message}`);

      localStorage.setItem("token", res.data.user?.token); // JWT
      localStorage.setItem("loginTime", new Date().toISOString());

      router.push("/");
    } catch (error: any) {
      setErrorMsg(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

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
    <div className="lg:w-[80vw] md:w-[80vw] w-[90vw] h-[80vh] dark:text-white text-black flex justify-center items-center">
      <div className="w-2/3 md:flex hidden justify-center items-center"></div>

      <div className="lg:w-1/3 md:w-1/2 w-full h-full flex flex-col justify-center items-center gap-y-8 dark:text-neutral-400 text-gray-600">
        <div className="w-10/12 flex flex-col gap-y-2">
          <h2 className="h3 font-bold text-3xl dark:text-white text-black">
            Register as a Customer
          </h2>

          <div className="w-full flex gap-x-2 dark:text-white text-black">
            Already have an account?
            <Link href="/auth/login" className="text-green-500 font-medium">
              Login
            </Link>
          </div>
        </div>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        {successMsg && <p className="text-green-500">{successMsg}</p>}

        {registrationAsTrue ? (
          <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <Input
              type="input"
              containerClassName="w-10/12 relative"
              label="Verification OTP"
              iconVisibility={true}
              icon={<Key className="absolute top-[10px] left-[10px]" />}
              inputType="text"
              placeholder="OTP"
              optionData={<></>}
              inputContainerClassName="w-full"
              labelClassName="block mb-2.5 text-sm font-medium text-heading"
              className={`flex-1 block ps-12 pe-3 py-3 dark:bg-neutral-700 bg-neutral-200 border dark:border-neutral-600 border-neutral-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:dark:text-neutral-200 placeholder:text-neutral-600 dark:text-white text-black text-right`}
              phoneCode={false}
              value={otp}
              name="otp"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <Input
              type="input"
              containerClassName="w-10/12 relative"
              label="User"
              iconVisibility={true}
              icon={<User2 className="absolute top-[10px] left-[10px]" />}
              inputType="text"
              placeholder="username"
              optionData={<></>}
              inputContainerClassName="w-full "
              labelClassName="block mb-2.5 text-sm font-medium text-heading"
              className={`flex-1 block ps-12 pe-3 py-3 dark:bg-neutral-700 bg-neutral-200 border dark:border-neutral-600 border-neutral-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:dark:text-neutral-200 placeholder:text-neutral-600 dark:text-white text-black text-right`}
              phoneCode={false}
              value={formData.username}
              name="username"
              onChange={handleChange}
            />

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
              className={`flex-1 block ps-12 pe-3 py-3 dark:bg-neutral-700 bg-neutral-200 border dark:border-neutral-600 border-neutral-400 text-heading text-sm rounded-br-md rounded-tr-md focus:ring-brand focus:border-brand shadow-xs placeholder:dark:text-neutral-200 placeholder:text-neutral-600 dark:text-white text-black text-right`}
              phoneCode={false}
              value={formData.email}
              name="email"
              onChange={handleChange}
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
              className={`flex-1 block ps-12 pe-3 py-3 dark:bg-neutral-700 bg-neutral-200 border dark:border-neutral-600 border-neutral-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:dark:text-neutral-200 placeholder:text-neutral-600 dark:text-white text-black text-right`}
              phoneCode={false}
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
        )}

        <div className="w-10/12 flex flex-col justify-start items-center">
          <div className="w-full flex gap-x-4">
            <input
              type="checkbox"
              name="checkbox"
              className="text-xl w-5 rounded-md"
            />

            {/* linking privacy Page */}
            {registrationAsTrue ? (
              <div className="flex gap-x-2">
                <button
                  type="button"
                  className="text-green-600"
                  onClick={ResendOtp}
                >
                  Resend OTP to ${formData.email}
                </button>
              </div>
            ) : (
              <div className="flex gap-x-2 dark:text-white text-black">
                <div>I agree to the</div>
                <Link href="#" className="text-green-500 font-medium">
                  Terms & condition
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="w-10/12 text-gray-100">
          {registrationAsTrue ? (
            <button
              type="button"
              disabled={loading}
              className="w-full py-3 bg-green-500 rounded-md dark:text-white text-black flex justify-center items-center"
              onClick={(e) => handleRegisterationVerification(e)}
            >
              Verify
            </button>
          ) : (
            <button
              type="button"
              disabled={loading}
              className="w-full py-3 bg-green-500 font-medium text-white rounded-md flex justify-center items-center"
              onClick={(e) => handleRegister(e)}
            >
              {loading ? (
                <FaSpinner color="#fff" className="animate-spin" />
              ) : (
                "Register"
              )}
            </button>
          )}
        </div>

        <div className="w-10/12 flex justify-center items-center font-bold dark:text-white text-black">
          <h2>Or</h2>
        </div>

        <div className="w-10/12 flex justify-center items-center gap-x-2 text-white ">
          <button
            type="button"
            className="w-1/2 px-10 py-3 bg-green-500 rounded-md flex justify-center items-center gap-x-2 font-medium"
          >
            <FaGoogle />
            Google
          </button>
          <button
            type="button"
            className="w-1/2 px-10 py-3 bg-green-500 rounded-md flex justify-center items-center gap-x-2 font-medium"
          >
            <FaFacebook />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
