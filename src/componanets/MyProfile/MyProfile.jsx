"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const MyProfile=()=> {

  const {data:session}=authClient.useSession()
const user=session?.user;

console.log(user)
  return (
    <div className="min-h-screen flex items-center my-10 rounded-3xl justify-center px-4 bg-gray-400  text-white">
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10"
      >
        
        {/* Image Section */}
        <motion.div
          variants={item}
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30">
            <Image
              src={user?.image}  
              alt="Profile"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>


          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20 -z-10" />
        </motion.div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">

          <motion.h1
            variants={item}
            className="text-3xl md:text-5xl font-bold"
          >
         <span className="text-cyan-400">{user?.name}</span>
          </motion.h1>

         

          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            {user?.email}
            </span>
           
          </motion.div>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 font-bold bg-cyan-500 hover:bg-cyan-600 rounded-lg "
          >
           Update Profile
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default MyProfile ;