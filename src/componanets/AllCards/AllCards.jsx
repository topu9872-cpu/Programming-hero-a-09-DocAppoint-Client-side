import { Clock } from "lucide-react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const AllCards = ({doctor}) => {
  return (
    <div className="mx-auto">
       <div
          
            className="card bg-base-100 w-96 rounded-2xl shadow-sm"
          >
            <p className="absolute top-4 left-76 bg-white rounded-2xl px-2 font-medium text-lg text-info flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              {doctor.rating}
            </p>
            <Image
              src={doctor.image}
              width={200}
              height={240}
              alt={doctor.name}
              className="image-full w-full rounded-t-xl rounded h-70"
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
                <button className="btn btn-info text-lg items-center text-white font-bold">
                  <FaEye /> Viwe
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default AllCards;