'use client'
import { useEffect, useState } from "react";
import { getBookingDoctor } from "../../../lib/actiondata";
import MyBookingcard from "./MyBookingcard";

const MyBookings =  () => {
  
  const [booking, setBooking]=useState([])
useEffect(()=>{
const data = getBookingDoctor().then(data=>setBooking(data))

},[])
  return (
    <div>
      <MyBookingcard booking={booking} />

    </div>
  );
};

export default MyBookings;
