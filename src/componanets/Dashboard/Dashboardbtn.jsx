"use client";
import Link from "next/link";
import { useState } from "react";

const Dashboardbtn = () => {
  const [active, setActive] = useState("Bookings");

  return (
    <div className="ml-10 mt-10">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="relative flex w-64 rounded-lg bg-gray-200 p-1 mt-6 overflow-hidden">

        {/* Indicator */}
        <div
          className={`absolute top-0.5 left-0.5 h-10 w-1/2 rounded-md bg-white shadow-md transition-transform duration-300 ${
            active === "Profile" ? "translate-x-full" : ""
          }`}
        />

       
        <Link
          href="/my-bookings"
          onClick={() => setActive("Bookings")}
          className={`relative z-30 flex-1 py-2 text-center text-sm font-semibold transition ${
            active === "Bookings" ? "text-info" : "text-gray-600"
          }`}
        >
          My Bookings
        </Link>

       
        <Link
          href="/my-profile"
          onClick={() => setActive("Profile")}
          className={`relative z-30 flex-1 py-2 text-center text-sm font-semibold transition ${
            active === "Profile" ? "text-info" : "text-gray-600"
          }`}
        >
          My Profile
        </Link>

      </div>
    </div>
  );
};

export default Dashboardbtn;