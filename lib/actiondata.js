
export const getDoctors = async () => {
    const res = await fetch("http://localhost:2000/all-doctors");
    const doctors = await res.json();
    return doctors
};



export const getDoctorsDetails = async (id) => {
    const res = await fetch(`http://localhost:2000/all-doctors/${id}`);
    const doctorDetails = await res.json();
    return doctorDetails;
}



/** 
 * ! booking action data fetching
 */
export const getBookingAppoinment = async (bookingData) => {
    const res = await fetch('http://localhost:2000/booking-appoinment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    });
    const bookingDatas = await res.json();
    return bookingDatas;
};

export const getBookingDoctor = async () => {
    const res = await fetch("http://localhost:2000/booking-appoinment");
    const doctors = await res.json();
    return doctors
};

