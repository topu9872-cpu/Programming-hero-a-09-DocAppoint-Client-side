
import SearchInput from "@/componanets/SearchInput/SearchInput";
const res = await fetch("http://localhost:2000/all-doctors");
const doctors = await res.json();
const AllAppoinment = () => {
  return (
    <div className="px-20 my-10">
     <SearchInput doctors={doctors}/>
    </div>
  );
};

export default AllAppoinment;