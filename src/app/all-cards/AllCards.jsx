"use client";

import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";

const AllCards = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-cyan-100 shadow-lg hover:shadow-cyan-300/40 hover:-translate-y-2 transition-all duration-300 w-90"
    >
      {/* Rating */}
      <p className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 font-semibold text-info flex items-center gap-1 shadow-md">
        <FaStar className="text-yellow-500" />
        {doctor.rating}
      </p>

      {/* IMAGE FIXED */}
      <div className="relative w-full h-55 overflow-hidden">
        <Image
          src={doctor.image}
          fill
          alt={doctor.name}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {doctor.name}
          </h2>

          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-1">
            <span className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full">
              {doctor.specialty}
            </span>

            <span className="bg-gray-100 px-2 py-1 rounded-full">
              {doctor.experience} Experience
            </span>
          </div>
        </div>

        
        <div className="flex justify-between items-center font-medium text-gray-700">
          <h2 className="flex items-center gap-2 text-sm">
            <Clock className="text-info w-4 h-4" />
            {doctor.availability}
          </h2>

          <h2 className="text-xl font-bold text-cyan-600">
            ${doctor.fee}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 line-clamp-3">
          {doctor.description}
        </p>

        {/* Button */}
        <div className="pt-3">
          <Link href={`/all-cards/${doctor._id}`}>
            <button className="btn btn-info w-full rounded-xl text-white text-lg font-semibold hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
              <FaEye />
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AllCards;