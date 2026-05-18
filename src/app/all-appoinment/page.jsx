import SearchInput from "@/componanets/SearchInput/SearchInput";
import { getDoctors } from "../../../lib/actiondata";
const doctors = await getDoctors();
const AllAppoinment = () => {
  return (
    <div className="my-10 mx-auto">
      <SearchInput doctors={doctors} />
    </div>
  );
};

export default AllAppoinment;
