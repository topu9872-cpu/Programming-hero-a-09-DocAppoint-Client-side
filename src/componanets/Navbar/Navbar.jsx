"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Navbar = () => {
  const router=useRouter()
  const pathName = usePathname();

const {data:session}=authClient.useSession()
const user=session?.user


const handleLogout=async()=>{
 

await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      toast.error('Logout Susseccfully !')
      router.push("/login");
    },
  },
});
}

  const navData = (
    <>
      <li
        className={`font-bold text-lg ${
          pathName === "/" ? "text-info" : ""
        }`}
      >
        <Link href={"/"}>Homepage</Link>
      </li>

      <li
        className={`font-bold text-lg ${
          pathName === "/all-appoinment" ? "text-info" : ""
        }`}
      >
        <Link href={"/all-appoinment"}>All Appointment</Link>
      </li>

      <li
        className={`font-bold text-lg ${
          pathName === "/dashboard" ? "text-info" : ""
        }`}
      >
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration:1, ease: "easeOut" }}
      className="w-full bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
    >
      <div className="navbar  mx-auto px-4 sm:px-10 lg:px-20 flex justify-between relative">
        
     
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1"
            >
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

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="w-13 h-13 sm:w-18 sm:h-18 relative"
          >
            <Image
              src="/assets/docicon.png"
              fill
              alt="icon"
              className="object-contain rounded-sm"
            />
          </motion.div>
        </div>

        {/* CENTER */}
        <div className="navbar-center absolute left-1/2 -translate-x-1/2 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navData}
          </ul>
        </div>

       {!user?
        <div className="space-x-2 sm:space-x-4  flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm sm:btn-md btn-info font-bold text-white px-3 sm:px-6"
          >
          <Link href={'/login'}>  Login</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm sm:btn-md btn-info font-bold text-white px-3 sm:px-6"
          >
           <Link href={'/register'}> Register</Link>
          </motion.button>
        </div>
:
        <div className="relative flex space-x-5">
          <div className=" text-xl font-bold text-info  right-20 absolute flex w-30 overflow-hidden">{user?.name.split(' ').pop()} !</div>
          
          <div className="avatar">
  <div className="w-24 rounded-full">
     <p className="status status-success left-7 top-7 bg-green-400 absolute animate-ping"></p>
    <Image src={user?.image} height={60} width={60} alt={user?.name}/>
    
  </div>
 
</div>
          <motion.button onClick={ handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm sm:btn-md btn-error font-bold text-white px-3 sm:px-6"
          >
            Logout
          </motion.button>
        </div>
}
      </div>
    </motion.nav>
  );
};

export default Navbar;