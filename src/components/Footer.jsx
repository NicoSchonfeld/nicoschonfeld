"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button, Link } from "@nextui-org/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";

import moment from "moment/moment";
moment.locale("es");

const formato = "YYYY";
const AñoActual = moment();

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="w-full py-10 h-auto flex flex-col items-center justify-center gap-5">
      <div className="space-x-5">
        <Link
          href="https://www.linkedin.com/in/nicoschonfeld/"
          target="_blank"
          className="text-2xl hover:scale-90 transition-all"
          color="success"
        >
          <AiFillLinkedin />
        </Link>

        <Link
          href="https://www.instagram.com/nicoschonfeld_/"
          target="_blank"
          className="text-2xl hover:scale-90 transition-all"
          color="success"
        >
          <FaInstagram />
        </Link>

        <Link
          href="https://github.com/NicoSchonfeld"
          target="_blank"
          className="text-2xl hover:scale-90 transition-all"
          color="success"
        >
          <AiFillGithub />
        </Link>

        <Link
          href="https://twitter.com/NicoSchonfeld__"
          target="_blank"
          className="text-2xl hover:scale-90 transition-all"
          color="success"
        >
          <RiTwitterXFill />
        </Link>
      </div>

      <Button
        variant="ghost"
        as={Link}
        href="https://vercel.com/"
        target="_blank"
      >
        Deployed on{" "}
        <span className="flex items-center">
          <SiVercel />
          Vercel.
        </span>
      </Button>

      <p className="text-gray-500">
        © {AñoActual.format(formato)} Nico Schönfeld.
      </p>
    </footer>
  );
};

export default Footer;
