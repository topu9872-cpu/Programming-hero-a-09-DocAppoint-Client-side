import Image from "next/image";
import BookingDelete from "../bookingDelete/BookingDelete";
import BookingAppoinmentUpdateForm from "../BookingAppoinmentUpdateForm/BookingAppoinmentUpdateForm";

const MyBookingcard = ({ booking }) => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20">
      {booking.map((book) => (
        <div
          key={book._id}
          className="group relative flex flex-col lg:flex-row gap-6 my-8 rounded-3xl border border-base-300 bg-base-100/80 backdrop-blur-md shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          
          <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

         
          <div className="relative w-full lg:w-80 h-64 overflow-hidden">
            <Image
              src={book?.image}
              width={400}
              height={300}
              alt={book?.name}
              className="w-full h-full object-cover lg:rounded-l-3xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="flex-1 p-5 space-y-3 relative z-10">
            <h1 className="text-2xl font-bold text-base-content">
              Patient:{" "}
              <span className="text-primary">{book.name}</span>
            </h1>

            <h2 className="text-lg font-semibold text-base-content/80">
              Doctor:{" "}
              <span className="text-primary">{book.doctorName}</span>
            </h2>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Available: {book.availability}
              </span>

              <span className="px-3 py-1 rounded-full bg-base-200 text-base-content font-medium">
                Fee: ${book.fee}
              </span>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-base-content/70 text-sm">
              <p className="truncate">📧 {book.email}</p>
              <span className="hidden sm:block">•</span>
              <p>📞 {book.phone}</p>
            </div>

            {/* EXTRA INFO */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-base-content/70 text-sm">
              <p>👤 {book.gender}</p>
              <span className="hidden sm:block">•</span>
              <p>⏰ {book.time}</p>
              <span className="hidden sm:block">•</span>
              <p>📅 {book.date}</p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
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