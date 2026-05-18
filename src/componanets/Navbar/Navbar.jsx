"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();


  const navData = (
    <>
      <li className={`font-bold text-lg ${pathName === "/" ? "text-info" : ""}`}>
        <Link href={"/"}>Homepage</Link>
      </li>
      <li className={`font-bold text-lg ${pathName === "/all-appoinment" ? "text-info" : ""}`}>
        <Link href={"/all-appoinment"}>All Appointment</Link>
      </li>
      <li className={`font-bold text-lg ${pathName === "/dashboard" ? "text-info" : ""}`}>
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-base-100 shadow-sm">

      <div className="navbar max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
      
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-4 shadow gap-2"
            >
              {navData}
            </ul>
          </div>
        
          <div className="w-13 h-13 sm:w-18 sm:h-18 relative">
            <Image src="/assets/docicon.png" fill alt="icon" className="object-contain" />
          </div>
        </div>

      
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navData}
          </ul>
        </div>

      
          <div className="space-x-2 sm:space-x-4 flex">
            <button className="btn btn-sm sm:btn-md btn-info font-semibold text-white px-3 sm:px-6">
              Login
            </button>
            <button className="btn btn-sm sm:btn-md btn-info font-semibold text-white px-3 sm:px-6">
              Register
            </button>
          </div>

         
          <div className="space-x-4 hidden items-center">
            <div className="avatar avatar-placeholder">
              <div className="w-9 rounded-full bg-amber-400">
                <span>SY</span>
              </div>
            </div>
            <button className="btn btn-sm sm:btn-md btn-error">
              Logout
            </button>
          </div>
        </div>

    
    </nav>
  );
};

export default Navbar;