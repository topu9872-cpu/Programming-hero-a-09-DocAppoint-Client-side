
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/componanets/Navbar/Navbar";
import Footer from "@/componanets/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Appointment Manager",
  description: `A Doctor Appointment Booking System where users can browse available doctors from the home page,
   view details, and book appointments. Users can manage their bookings, reviews,
   and profile using secure authentication (Better Auth with JWT/session`

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
