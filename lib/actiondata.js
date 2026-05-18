
export const getDoctors = async () => {
    const res = await fetch("http://localhost:2000/all-doctors");
    const doctors = await res.json();
    return doctors
};



export const getDoctorsDetails = async (id) => {
    const res = await fetch(`http://localhost:2000/all-doctors/${id}`);
    const doctorDetails = await res.json();
    return doctorDetails ;
}
