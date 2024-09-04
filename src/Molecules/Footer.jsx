import Button from "@/Atoms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-4 bg-bgGray scroll-m-24 px-24 p-8 w-full">
      <div className="flex justify-between">
        <div className="flex flex-col flex-[0.25] gap-3">
          <Image src="/logo.svg" alt="" width={150} height={20} />
          <p>
            We have 20+ years of experience providing unique teaching methods
            and live activity based learning.
          </p>
        </div>
        <div className="flex flex-col flex-[0.3] gap-4">
          <h2 className="font-semibold text-2xl">CONNECT</h2>
          <div className="flex items-center gap-5">
            {/* logo*/}
            <FaMapMarkerAlt className="w-6 h-6" />
            <div className="text-black text-lg">
              <h5>Address</h5>
              <p className="text-gray-600">
                No.30/3A, 3rd Floor, Metro Station Gate, Gali No. 3, opp. Tilak
                Nagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {/* logo*/}
            <FaPhoneAlt className="w-6 h-6" />
            <div className="text-black text-lg">
              <h5>Phone Number</h5>
              <p className="text-gray-600">9319629093</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {/* logo*/}
            <MdMail className="w-6 h-6" />
            <div className="text-black text-lg">
              <h5>Email</h5>
              <p className="text-gray-600">info@engmates.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-[0.3] items-start">
          <h2 className="text-2xl">REQUEST FREE CALL BACK</h2>
          <div className="flex flex-col gap-5 mt-5 w-full">
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border-2 border-gray-400 p-3"
            />
            <Button
              label={"CALL BACK"}
              classname="w-full text-white font-medium bg-brown"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm">
          ©2024 - 2025 Engmates |{" "}
          <Link href={"/"} className="text-blue-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
