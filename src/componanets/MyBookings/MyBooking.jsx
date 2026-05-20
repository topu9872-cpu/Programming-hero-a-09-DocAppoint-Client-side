'use client'
import { useEffect, useState } from "react";

import MyBookingcard from "./MyBookingcard";
import NotFoundcard from "../NotFoundCard/NotFoundcard";
import { getBookingDoctor } from "../../../lib/serveraction";



const MyBookings =  () => {
  
 
  const [booking, setBooking]=useState([])
useEffect(()=>{
const data = getBookingDoctor().then(data=>setBooking(data))
},[])


  return (
    <div>
      {! booking?
      <MyBookingcard booking={booking} />
 :  <NotFoundcard/>  }
    </div>
  );
};

export default MyBookings;
