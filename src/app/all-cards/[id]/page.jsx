import { getDoctorsDetails } from "../../../../lib/actiondata";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import BookingAppoinmentForm from "@/componanets/BookingAppoinmentForm/BookingAppoinmentForm";

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
    <div className="flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] transition-all duration-300 hover:-translate-y-2 hover:shadow-[20px_20px_40px_#b8b8b8,-20px_-20px_40px_#ffffff]">
        {/* Card Container */}
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-[320px] h-70 lg:h-auto relative">
            <Image
              src={image}
              fill
              alt={name}
              className="object-cover lg:rounded-l-[30px]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                {name}
              </h1>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {description}
              </p>

              <div className="space-y-2">
                <h2 className="font-semibold text-info text-sm md:text-lg">
                  {specialty} • {experience} Years Experience
                </h2>

                <div className="flex items-center gap-2 text-lg font-medium">
                  <FaStar className="text-yellow-500" />
                  <span>{rating}</span>
                </div>

                <p className="font-medium text-info">{availability}</p>

                <p className="font-semibold text-gray-700">
                  {hospital} • {location}
                </p>

                <p className="text-lg font-bold text-accent">
                  Consultation Fee: ${fee}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
             <BookingAppoinmentForm doctorDetails={doctorDetails}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
