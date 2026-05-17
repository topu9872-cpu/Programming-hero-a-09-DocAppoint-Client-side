"use client";

import { Mail } from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <div className="flex ">
          <h1 className="text-2xl font-bold text-gray-800">
            Doctor Appointment <span className="text-blue-600">Manager</span>
          </h1>
          <p className="text-sm text-gray-500"></p>
        </div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>

          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="rounded-full bg-white p-2 shadow hover:scale-110 transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="rounded-full bg-white p-2 shadow hover:scale-110 transition"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:example@gmail.com"
              className="rounded-full bg-white p-2 shadow hover:scale-110 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>

       
      </div>
       <footer className="footer sm:footer-horizontal border-t border-gray-300 footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
    </footer>
  );
};

export default Footer;
