import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="min-h-[25%] mt-0 md:mt-14 mt flex items-center justify-between ">
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
