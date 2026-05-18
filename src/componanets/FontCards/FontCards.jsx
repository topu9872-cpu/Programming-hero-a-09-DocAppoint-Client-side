import { Suspense } from "react";
import AllCards from "../AllCards/AllCards";

const FontCards = async () => {
  const res = await fetch("http://localhost:2000/all-doctors");
  const doctors = await res.json();

  const topDoctors = doctors.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    // Changed px-20 to responsive padding: px-4 on mobile, scaling up to px-10 and px-20 on larger screens
    <div className="px-4 sm:px-10 md:px-20 my-10 mx-auto max-w-7xl">
      {/* Changed span to a div, and added flex layout to ensure text-center works perfectly */}
      <div className="flex flex-col items-center text-center">
        {/* Adjusted text size for mobile (text-3xl) to desktop (md:text-5xl) */}
        <h1 className="mt-10 md:mt-20 pb-4 text-3xl md:text-5xl font-semibold text-info">
          Recommended Doctors
        </h1>
        {/* Adjusted text size for mobile (text-base) to desktop (md:text-xl) */}
        <p className="mb-10 text-base md:text-xl font-medium max-w-xl">
          Highly reviewed specialists ready to see you
        </p>
      </div>
      
      {/* Grid configuration is great, added justify-items-center to keep cards centered during transitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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