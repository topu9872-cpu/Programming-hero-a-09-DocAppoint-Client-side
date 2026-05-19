import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const AllCards = ({doctor}) => {
  return (
   
       <div
          
            className="relative bg-base-100 w-90 rounded-2xl shadow-sm"
          >
            <p className="absolute top-3 shadow-[0_0_10px_#ffffff] hover-3d left-70 bg-white rounded-2xl px-2 font-medium text-lg text-info flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              {doctor.rating}
            </p>
            <Image
              src={doctor.image}
              width={200}
              height={240}
              alt={doctor.name}
              className=" w-full rounded-t-xl rounded h-60 "
            />

            <div className="space-y-1 mt-2 p-4">
              <h2 className="text-2xl font-bold">{doctor.name}</h2>
              <span className="flex text-lg opacity-70">
                <h2>{`${doctor.specialty} ||`}</h2>

                <h2>{`${doctor.experience}  exprience `}</h2>
              </span>
              <div className="flex justify-between font-semibold">
                <h2 className="flex items-center gap-2">
                  <Clock className="text-info" /> {doctor.availability}
                </h2>
                <h2>${doctor.fee}</h2>
              </div>
              <p>{doctor.description}</p>
              <div className="card-actions justify-end pt-4">
               <Link href={`/all-cards/${doctor._id}`}> <button className="btn btn-info hover-3d text-lg items-center text-white font-bold">
                  <FaEye /> Viwe
                </button></Link>
              </div>
            </div>
          </div>
    
  );
};

export default AllCards;