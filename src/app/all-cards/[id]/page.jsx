import { Button, Card, CloseButton } from "@heroui/react";
import { getDoctorsDetails } from "../../../../lib/actiondata";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const DoctorDetails = async ({ params }) => {
  const { id } = await params;
  const doctorDetails = await getDoctorsDetails(id);
  const {
    name,
    specialty,
    image,
    experience,
    rating,
    availability,
    description,
    hospital,
    location,
    fee,
  } = doctorDetails;
  return (
    <div className="flex justify-center my-10 items-center">
      <div className="w-250  font-serif rounded-4xl bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] transition-all duration-300 hover:-translate-y-2 hover:shadow-[20px_20px_40px_#b8b8b8,-20px_-20px_40px_#ffffff]">
        <div className=" rounded-4xl lg:card-side flex space-x-6">
          <Image
            src={image}
            width={300}
            height={260}
            alt="image"
            className=" rounded-l-4xl pointer-events-none inset-0  object-cover select-none"
          />
          <div className="p-10 space-y-1">
            <h1 className="text-3xl font-semibold ">{name}</h1>
            <p className="opacity-85 ">{description}</p>
            <ul>
                <li className="font-semibold text-info">{specialty} || { experience}</li>
                <li className="flex font-mono text-info text-lg items-center gap-1"><FaStar className="text-yellow-500"/>{rating}</li>
            </ul>
            <h2 className="font-semibold text-info">{availability}</h2>
            <h2 className="text-info font-semibold">{ hospital} || {location}</h2>
        
              <button className="card mt-24 w-full btn btn-accent text-white text-lg">Book an Appoinment</button>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
