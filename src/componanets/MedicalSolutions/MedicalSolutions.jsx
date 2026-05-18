import Image from "next/image";
import React from "react";

const MedicalSolutions = () => {
  return (
    <div className="flex flex-col flex-1/2 mx-auto md:flex-row items-center gap-8 p-6">

   
      <div>
        <Image
          src="https://jthemes.net/themes/html/medservices/files/images/image-03.png"
          width={400}
          height={560}
          alt="Medical illustration"
          className="w-220 h-160"
        />
      </div>

  
      <div className="space-y-4">
        <h4 className="text-info text-5xl font-black">Welcome to MedService</h4>
        <h1 className="text-xl text-accent font-bold">Complete Medical Solutions in One Place</h1>

        <p className="opacity-80">
          Porta semper lacus cursus, feugiat primis ultrice in ligula risus
          auctor tempus feugiat dolor lacinia cubilia curae integer congue leo
          metus, eu mollis lorem primis in orci integer metus mollis faucibus.
        </p>

        <p className="text-2xl font-serif">
          Randon Pexon, Head of Clinic
        </p>

        <Image
          src="https://jthemes.net/themes/html/medservices/files/images/signature.png"
          width={120}
          height={60}
          alt="signature"
          className="w-60 h-10"
        />
      </div>
    </div>
  );
};

export default MedicalSolutions;