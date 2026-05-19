"use client";
import React, { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto my-20 w-fit">
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-[350px] h-[520px] bg-white rounded-[10px] p-[20px_30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] box-border flex flex-col justify-between">
          <div>
            <p className="text-center font-sans mt-[10px] mb-[30px] text-[28px] font-extrabold text-gray-900">
              Welcome back
            </p>

            <form className="w-full flex flex-col gap-[18px] mb-[15px]">
              <input
                type="email"
                className="w-full rounded-[20px] border border-[#c0c0c0] outline-none px-[15px] py-[12px] box-border text-sm placeholder-gray-400 focus:border-teal-600 transition-colors"
                placeholder="Email"
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-[20px] border border-[#c0c0c0] outline-none pl-[15px] pr-[45px] py-[12px] box-border text-sm placeholder-gray-400 focus:border-teal-600 transition-colors"
                  placeholder="Password"
                />

                {/* Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 flex items-center justify-center p-1 rounded-full hover:bg-gray-100 transition-all"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <Eye size={16} /> : <EyeSlash size={16} />}
                </button>
              </div>

              {/* Forgot Password */}
              <p className="underline text-right text-[#747474] decoration-[#747474]">
                <span className="cursor-pointer font-sans text-[9px] font-bold hover:text-black transition-colors">
                  Forgot Password?
                </span>
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-[15px] py-[10px] font-sans rounded-[20px] border-0 outline-none bg-teal-700 text-white cursor-pointer shadow-[0_3px_8px_rgba(0,0,0,0.24)] active:shadow-none hover:bg-teal-800 transition-all"
              >
                Log in
              </button>
            </form>

            {/* Sign Up Label */}
            <p className=" text-[10px] text-[#747474] font-sans">
              Don't have an account?
              <Link href={"/register"}>
                <span className="ml-[1px] text-[11px] underline decoration-teal-700 text-teal-700 cursor-pointer font-extrabold font-sans hover:text-teal-800">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
  <div className="divider">or</div>
          <div className="mt-0 space-y-3">
            <button className="btn bg-black w-full rounded-full text-white border-black">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Login with GitHub
            </button>

            {/* Google */}
            <button className="btn bg-white text-black  w-full rounded-full border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
