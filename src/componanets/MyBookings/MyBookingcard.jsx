import Image from "next/image";

import BookingDelete from "../bookingDelete/BookingDelete";
import BookingAppoinmentUpdateForm from "../BookingAppoinmentUpdateForm/BookingAppoinmentUpdateForm";

const MyBookingcard = ({ booking }) => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20">
      {booking.map((book) => (
        <div
          key={book._id}
          className="group relative flex flex-col lg:flex-row justify-between items-center gap-6 my-8 rounded-3xl border border-cyan-100 bg-white/90 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-cyan-200/60 hover:-translate-y-1 transition-all duration-300"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/20 via-transparent to-cyan-100/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Image */}
          <div className="relative w-full lg:w-[350px] h-[260px] overflow-hidden">
            <Image
              src={book?.image}
              width={350}
              height={280}
              alt={book?.name}
              className="w-full h-full object-cover lg:rounded-l-3xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-3 flex-1 p-5 w-full relative z-10">
            <h1 className="text-2xl font-bold text-gray-800">
              Patient Name:{" "}
              <span className="text-cyan-600">{book.name}</span>
            </h1>

            <h2 className="text-lg font-semibold text-gray-700">
              Doctor Name:{" "}
              <span className="text-cyan-500">{book.doctorName}</span>
            </h2>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium">
                Available: {book.availability}
              </span>

              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                Fee: ${book.fee}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
              <p className="truncate">📧 {book.email}</p>

              <span className="hidden sm:block text-cyan-400">•</span>

              <p>📞 {book.phone}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
              <p>⏰ {book.time}</p>

              <span className="hidden sm:block text-cyan-400">•</span>

              <p>📅 {book.date}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 p-5 w-full lg:w-auto relative z-10">
            <BookingAppoinmentUpdateForm book={book} />
            <BookingDelete book={book} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookingcard;