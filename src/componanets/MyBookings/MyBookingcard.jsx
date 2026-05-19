import Image from "next/image";

import BookingDelete from "../bookingDelete/BookingDelete";
import BookingAppoinmentUpdateForm from "../BookingAppoinmentUpdateForm/BookingAppoinmentUpdateForm";
const MyBookingcard = ({ booking }) => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20">
      {booking.map((book) => (
        <div
          key={book._id}
          className="text-black flex flex-col lg:flex-row justify-between items-center gap-6 my-10 rounded-2xl overflow-hidden shadow-[0_0_8px_#00ffff]"
        >
          {/* Image */}
          <div className="w-full  lg:w-98 ">
            <Image
              src={book?.image}
              width={350}
              height={280}
              alt={book?.name}
              className="w-full h-full object-cover lg:rounded-l-2xl"
            />
          </div>

          <div className="space-y-3 flex-1 p-5 w-full">
            <h1 className="text-xl md:text-2xl font-bold">
              Patient Name: {book.name}
            </h1>

            <h2 className="text-lg font-medium text-cyan-600">
              Doctor Name: {book.doctorName}
            </h2>

            <p className="text-gray-600">Available: {book.availability}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
              <p>Email: {book.email}</p>

              <span className="hidden sm:block">•</span>

              <p>Phone: {book.phone}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
              <p>{book.time}</p>

              <span className="hidden sm:block">•</span>

              <p>{book.date}</p>
            </div>

            <p className="font-bold text-lg text-black">${book.fee}</p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-row lg:mt-40 gap-3 p-5 w-full lg:w-auto">
            <BookingAppoinmentUpdateForm book={book} />
            <BookingDelete book={book} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookingcard;
