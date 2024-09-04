import Button from "@/Atoms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navLinks = ["Benefits", "Curriculum", "Reviews", "FAQs"];

  return (
    <header className="top-0 z-[100] fixed bg-bgGray w-full">
      <div className="flex justify-between items-center h-[90px] section-container">
        <div>
          <Image src="logo.svg" alt="" width={200} height={50} />
        </div>
        <div className="flex flex-[0.6] justify-end items-center gap-9">
          <div>
            {navLinks.map((item, i) => (
              <Link
                href={`#${item}`}
                className="pl-8 text-[17px] hover:text-orange"
                key={i}
              >
                {item}
              </Link>
            ))}
          </div>
          <Button
            label={"Whatsapp Us"}
            size="small"
            classname="bg-white text-orange hover:bg-gradient-to-r from-yellow to-orange hover:text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
