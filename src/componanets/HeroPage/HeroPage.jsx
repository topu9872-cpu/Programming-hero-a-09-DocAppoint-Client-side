"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Book Doctor Appointments Easily",
    subtitle:
      "Connect with experienced doctors, schedule appointments instantly and manage your healthcare journey smoothly.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Your Health, Our Priority",
    subtitle:
      "A smart healthcare management platform designed for patients, clinics and medical professionals.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Fast, Secure & Reliable",
    subtitle:
      "Manage appointments, patient records and doctor schedules with a modern and secure system.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
     
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-[92vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex h-full items-center">
            
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

             
              <div className="absolute inset-0 bg-slate-950/75" />

             
              <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
               
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-center md:text-left"
                >
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
                    <Stethoscope size={16} />
                    Doctor Appointment Manager
                  </span>

                  <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
                    Welcome to{" "}
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      DocAppoint
                    </span>
                  </h1>

                  <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
                    A modern healthcare platform that helps patients easily
                    find doctors, book appointments and manage medical services
                    from anywhere.
                  </p>

              
                  <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
                    <button className="group flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-black transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-cyan-400">
                     <Link href={'/all-appoinment'}> Book Appointment</Link>
                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <button className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                      Explore Doctors
                    </button>
                  </div>

               
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-5 md:justify-start">
                    <div className="flex items-center gap-2 text-slate-300">
                      <ShieldCheck className="text-cyan-400" size={20} />
                      Secure System
                    </div>

                    <div className="flex items-center gap-2 text-slate-300">
                      <CalendarCheck className="text-cyan-400" size={20} />
                      Easy Booking
                    </div>
                  </div>
                </motion.div>

               
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="hidden w-full max-w-md rounded-4xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl lg:block"
                >
                  <div className="space-y-5">
                  
                    <div className="rounded-2xl bg-white/10 p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          Appointments
                        </h3>

                        <span className="rounded-lg bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                          Today
                        </span>
                      </div>

                      <h2 className="text-4xl font-black text-white">1,250+</h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Successfully managed appointments this month.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl bg-white/10 p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          Doctors Available
                        </h3>

                        <span className="rounded-lg bg-green-500/20 px-3 py-1 text-sm text-green-300">
                          Active
                        </span>
                      </div>

                      <h2 className="text-4xl font-black text-white">120+</h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Verified healthcare professionals available online.
                      </p>
                    </div>

                  
                    <div className="rounded-2xl bg-linesar-to-r from-cyan-500 to-blue-500 p-5 text-black">
                      <h3 className="mb-2 text-2xl font-bold">
                        Your Health Matters 💙
                      </h3>

                      <p className="text-sm opacity-80">
                        Manage appointments quickly and access healthcare
                        services anytime with DocAppoint.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}