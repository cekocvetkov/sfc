"use client";
import Link from "next/link";
import React from "react";
import useScrollDirection from "../hooks/UseScrollDirection";

function Navigation() {
  useScrollDirection();

  return (
    <nav id="header" className="sticky top-0 bg-background-color !z-50 min-h-[142px] mt-0 md:mt-14 mt flex items-center justify-between transition-transform ease-in-out duration-[0.2s]">
      <div>
        <Link href="/" className="">
          home
        </Link>
      </div>
      <div className="flex flex-col ">
        <Link href="/about" className="">
          about me
        </Link>
        <Link href="/search" className="">
          search
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
