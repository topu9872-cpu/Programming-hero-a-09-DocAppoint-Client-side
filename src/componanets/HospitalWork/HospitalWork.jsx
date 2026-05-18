import Image from "next/image";
import React from "react";

// Simple SVG Icons
const DoctorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z"
      fill="#4F46E5"
    />
    <path
      d="M4 22c0-4 3.6-7 8-7s8 3 8 7"
      stroke="#4F46E5"
      strokeWidth="2"
    />
  </svg>
);

const EquipmentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="6" width="16" height="12" rx="2" stroke="#10B981" strokeWidth="2"/>
    <path d="M8 10h8M8 14h6" stroke="#10B981" strokeWidth="2"/>
  </svg>
);

const EmergencyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <path d="M12 2v20M2 12h20" stroke="#EF4444" strokeWidth="2"/>
  </svg>
);

const UserIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#F59E0B" />
    <path d="M4 22c0-4 3.6-7 8-7s8 3 8 7" stroke="#F59E0B" strokeWidth="2"/>
  </svg>
);

const HospitalWork = () => {
  return (
    <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6  p-6">

      <div className="p-6 space-y-4 card text-center  shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl">
      <Image className="mx-auto text-cyan-500"
  src="/assets/doctor (1).png" 
  width={50} 
  height={50} 
  alt="doctor" 

/>
        <h1 className="text-3xl text-info">Qualified Doctors</h1>
        <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus.</p>
      </div>

           <div className="p-6 space-y-4 card text-center  shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl">
    <Image  className="mx-auto text-cyan-500" src="/assets/ventilation.png" width={50} height={50} alt="doctor" />
        <h1 className="text-3xl text-info">Modern Equipment</h1>
        <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus.</p>
      </div>

           <div className="p-6 space-y-4 card text-center  shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl">
     <Image  className="mx-auto text-cyan-500" src="/assets/emergency-ambulance.png" width={50} height={50} alt="doctor" />
        <h1 className="text-3xl text-info">Emergency Help</h1>
        <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus.</p>
      </div>

        <div className="p-6 space-y-4 card text-center  shadow-[0_0_4px] hover-3d hover:shadow-[0_0_10px_5px_#00ffff] rounded-xl">
    <Image  className="mx-auto text-cyan-500" src="/assets/stethoscope.png" width={50} height={50} alt="doctor" />
        <h1 className="text-3xl text-info">Individual Approach</h1>
        <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus.</p>
      </div>

    </div>
  );
};

export default HospitalWork;