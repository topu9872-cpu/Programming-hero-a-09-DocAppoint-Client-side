"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HospitalWork = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6  p-6"
    >
      <motion.div
        variants={{
          hidden: { y: 80, opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-6 space-y-4 card text-center shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl"
      >
        <Image
          className="mx-auto text-cyan-500"
          src="/assets/doctor (1).png"
          width={50}
          height={50}
          alt="doctor"
        />
        <h1 className="text-3xl text-info">Qualified Doctors</h1>
        <p>
          Porta semper lacus cursus, feugiat primis ultrice in ligula risus
          auctor tempus.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: 80, opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-6 space-y-4 card text-center shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl"
      >
        <Image
          className="mx-auto text-cyan-500"
          src="/assets/ventilation.png"
          width={50}
          height={50}
          alt="doctor"
        />
        <h1 className="text-3xl text-info">Modern Equipment</h1>
        <p>
          Porta semper lacus cursus, feugiat primis ultrice in ligula risus
          auctor tempus.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: 80, opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-6 space-y-4 card text-center shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl"
      >
        <Image
          className="mx-auto text-cyan-500"
          src="/assets/emergency-ambulance.png"
          width={50}
          height={50}
          alt="doctor"
        />
        <h1 className="text-3xl text-info">Emergency Help</h1>
        <p>
          Porta semper lacus cursus, feugiat primis ultrice in ligula risus
          auctor tempus.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: 80, opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-6 space-y-4 card text-center shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl"
      >
        <Image
          className="mx-auto text-cyan-500"
          src="/assets/stethoscope.png"
          width={50}
          height={50}
          alt="doctor"
        />
        <h1 className="text-3xl text-info">Individual Approach</h1>
        <p>
          Porta semper lacus cursus, feugiat primis ultrice in ligula risus
          auctor tempus.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HospitalWork;