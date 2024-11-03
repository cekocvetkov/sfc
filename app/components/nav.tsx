"use client";
import Link from "next/link";
import React from "react";
import useScrollDirection from "../hooks/UseScrollDirection";
import { usePathname } from "next/navigation";
import ScrollToTop from "./ScrollToTop";

function Navigation() {
  useScrollDirection();

  const pathName = usePathname();
  console.log(pathName);
  const isActive = (href: string) => pathName === href;

  return (
    <nav id="header" className=" sticky top-0 bg-background-color !z-50 min-h-[142px] mt-0 md:mt-14 mt flex items-center justify-between transition-transform ease-in-out duration-[0.2s]">
      {/* <ScrollToTop></ScrollToTop> */}
      <div>
        <Link href="/" className="hover:text-secondary-text-color">
          home
        </Link>
      </div>
      <div className="flex flex-col ">
        <Link href="/about" className={`hover:text-secondary-text-color ${isActive("/about") ? "text-secondary-text-color" : ""}`}>
          about me
        </Link>
        <Link href="/search" className={`hover:text-secondary-text-color ${isActive("/search") ? "text-secondary-text-color" : ""}`}>
          search
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
