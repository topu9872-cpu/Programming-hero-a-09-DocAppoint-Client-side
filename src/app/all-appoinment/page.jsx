import SearchInput from "@/componanets/SearchInput/SearchInput";
import { getDoctors } from "../../../lib/actiondata";
const doctors = await getDoctors();

export const metadata = {
  title: "All Appointment Manager",
  description: `A Doctor Appointment Booking System where users can browse available doctors from the home page,
   view details, and book appointments. Users can manage their bookings, reviews,
   and profile using secure authentication (Better Auth with JWT/session`

};
const AllAppoinment = () => {
  return (
    <div className="my-10 mx-auto">
      <SearchInput doctors={doctors} />
    </div>
  );
};

export default AllAppoinment;
