'use client'
import { useEffect, useState } from "react";
import { getBookingDoctor } from "../../../lib/actiondata";
import MyBookingcard from "./MyBookingcard";
import NotFoundcard from "../NotFoundCard/NotFoundcard";

const MyBookings =  () => {
  
  const [booking, setBooking]=useState([])
useEffect(()=>{
const data = getBookingDoctor().then(data=>setBooking(data))

},[])
  return (
    <div>
      {!booking?
      <MyBookingcard booking={booking} />
:  <NotFoundcard/>  }
    </div>
  );
};

export default MyBookings;
