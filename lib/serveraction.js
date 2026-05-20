'use server'
import { auth } from "@/auth";
import { headers } from "next/headers";

export const getBookingDoctor = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()

    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking-appoinment`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: 'no-store'
    });
    const doctors = await res.json();

    return doctors
};
