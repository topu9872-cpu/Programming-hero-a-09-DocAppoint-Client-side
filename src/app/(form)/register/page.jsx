"use client";
import React, { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import {  useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createAuthClient } from "better-auth/client";
const FormInput = ({ label, type = "text", ...props }) => (
  <label className="relative w-full block">
    <input
      className="peer w-full p-[10px_10px_20px_10px] outline-none border border-gray-300 rounded-[10px] text-sm focus:border-blue-600 transition-colors placeholder-transparent"
      type={type}
      placeholder={label}
      required
      {...props}
    />
    <span
      className="absolute left-2.5 top-4 text-gray-400 text-[0.9em] cursor-text transition-all duration-300 
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.9em]
      peer-focus:top-0 peer-focus:text-[0.7em] peer-focus:font-semibold peer-focus:text-blue-600
      peer-valid:top-0 peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:text-green-600"
    >
      {label}
    </span>
  </label>
);

const RegisterPage = () => {

  const authClient = createAuthClient();

 const GoogleSignIn = async () => {
  try {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL:('/login')
    });

    if (data) {
      toast.success("Registration Successful")
        
    }
  } catch (error) {
    toast.error(error.message);
  }
};
  const GithubSignIn = async () => {
  try {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL:('/login')
    });

    if (data) {
      toast.success("Registration Successful");
       redirect('/login')
    }
  } catch (error) {
    toast.error(error.message);
  }
};


  const router = useRouter();
  const handaleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: datas.name,
      email: datas.email,
      password: datas.password,
      image: datas.image,
    });
    if (data) {
      router.push("/login");
      toast.success("Registion Susseccfull");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handaleRegister}
        className="flex flex-col gap-3 w-full max-w-88 bg-white p-5 rounded-[20px] shadow-sm font-sans"
      >
        {/* Header Section */}
        <div className="space-y-1">
          <p
            className="text-[28px] tracking-tight relative flex items-center pl-8 text-blue-600 font-semibold
            before:absolute before:content-[''] before:h-5 before:w-5 before:rounded-full before:left-0 before:bg-blue-600
            after:absolute after:content-[''] after:h-5 after:w-5 after:rounded-full after:left-0 after:bg-blue-600 after:animate-ping"
          >
            Register
          </p>
          <p className="text-sm text-gray-500/80">
            Signup now and get full access to our app.
          </p>
        </div>

        <div className="flex gap-2 w-full">
          <FormInput label="name" name="name" />
          <FormInput label="Url" name="image" />
        </div>

        <FormInput label="Email" type="email" name="email" />

        <div className="relative w-full">
          <FormInput
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            className="peer w-full p-[10px_35px_20px_10px] outline-none border border-gray-300 rounded-[10px] text-sm focus:border-blue-600 transition-colors placeholder-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10 p-1"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <Eye size={16} /> : <EyeSlash size={16} />}
          </button>
        </div>

        {/* Submit Actions */}
        <button
          type="submit"
          className="w-full bg-blue-600 p-2.5 rounded-[10px] text-white font-medium transition-all duration-300 hover:bg-blue-700 cursor-pointer mt-1"
        >
          Submit
        </button>

        <p className="text-sm text-gray-500/80 text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Signin
          </a>
        </p>
        <div className="divider">or</div>
        <div className="mt-0 space-y-3">
          <button onClick={GithubSignIn} className="btn bg-black w-full rounded-full text-white border-black">
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
          <button
            onClick={GoogleSignIn}
            className="btn bg-white text-black  w-full rounded-full border-[#e5e5e5]"
          >
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
      </form>
    </div>
  );
};

export default RegisterPage;
