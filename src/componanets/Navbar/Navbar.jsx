"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
const pathName=usePathname();

  const navData = (
    <ul className=" md:flex">
      <li className={`font-bold text-lg ${pathName ==='/'? 'text-info': ''}`}>
       <Link href={'/'} >Homepage</Link>
      </li>
       <li className={`font-bold text-lg ${pathName ==='/all-appoinment'? 'text-info': ''}`}>
       <Link href={'/all-appoinment'} >All Appointment</Link>
      </li>
      <li className={`font-bold text-lg ${pathName ==='/dashboard'? 'text-info': ''}`}>
       <Link href={'/dashboard'} >Dashboard</Link>
      </li>
    </ul>
  );

  return (
    <nav>
  <div className="navbar bg-base-100 px-20 shadow-sm">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navData}
      </ul>
    </div>
  <Image src="/assets/docicon.png" width={70} height={70} alt='icon'/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navData}
    </ul>
  </div>
  <div className="navbar-end">
    <div className=" space-x-6 ">
<button className="btn btn-info font-semibold text-white">
    Login
</button>
<button className="btn btn-info  font-semibold text-white">
    Register
</button>
    </div>
  <div className="space-x-6 hidden">
   <div className="avatar avatar-placeholder">
  <div className="w-9 rounded-full bg-amber-400">
    <span>SY</span>
  </div>
</div>
<button className="btn btn-error">
    Logout
</button>
  </div>
  </div>
</div>
</nav>
  );
};

export default Navbar;
