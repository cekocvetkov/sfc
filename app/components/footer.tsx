import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full py-10 text-center hidden flex-col gap-y-3 md:flex [@media_((max-height:800px)_and_(min-width:948px))]:py-1 [@media_((max-height:800px)_and_(min-width:948px))]:mt-[-100px] ">
      <div className="flex justify-center gap-x-4 [@media_((max-height:800px)_and_(min-width:948px))]:hidden">
        <Link aria-label="LinkedIn Link" href="https://linkedin.com/in/tsvetkov-tsvetan">
          <IoLogoLinkedin size={24} />
        </Link>
        <Link aria-label="Github Link" href="https://github.com/cekocvetkov">
          <IoLogoGithub size={24}></IoLogoGithub>
        </Link>
      </div>
      <p className=" text-primary-text-color "> Copyright &copy; {currentYear} Tsvetan Tsvetkov</p>
    </footer>
  );
}

export default Footer;
