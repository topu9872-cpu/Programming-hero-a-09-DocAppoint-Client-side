
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

export const getBookingDoctor = async () => {

    const res = await fetch("http://localhost:2000/booking-appoinment", {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
        cache: 'no-store'
    });
    const doctors = await res.json();
    return doctors
};



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


export const getBookingappoinmentDelete = async (id) => {
    const res = await fetch(`http://localhost:2000/booking-appoinment/${id}`, {
        cache: 'no-store',
        method: 'DELETE'

    })
    const bookingDelete = await res.json()
    return bookingDelete;
};

export const getUpDateBooking = async (bookingUpdate) => {
    const {
        id,
        name,
        phone,
        date,
        time
    } = bookingUpdate;
    const res = await fetch(`http://localhost:2000/booking-appoinment/${id}`, {
        cache: 'no-store',
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            phone,
            date,
            time
        }
        )

    })
    const bookingUpdates = await res.json()
    return bookingUpdates;
}