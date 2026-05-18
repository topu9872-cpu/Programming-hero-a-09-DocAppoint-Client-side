import { Suspense } from "react";

import { getDoctors } from "../../../lib/actiondata";
import AllCards from "@/app/all-cards/page";

const FontCards = async () => {
 const doctors= await getDoctors()
  const topDoctors = doctors.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="px-4 sm:px-10 md:px-20 my-10 mx-auto max-w-7xl">
      <div className="flex flex-col items-center text-center">
        <h1 className="mt-10 md:mt-20 pb-4 text-3xl md:text-5xl font-semibold text-info">
          Recommended Doctors
        </h1>

        <p className="mb-10 text-base md:text-xl font-medium max-w-xl">
          Highly reviewed specialists ready to see you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 w-90% mx-auto my-10 lg:grid-cols-3  justify-items-center">
        {topDoctors.map((doctor) => (
          <Suspense 
            key={doctor._id}
            fallback={
              <div className="flex justify-center items-center h-48 w-full">
                <span className="loading loading-spinner text-info"></span>
              </div>
            }
          >
         
              <AllCards doctor={doctor} />
        
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default FontCards;
