"use client";
import Link from "next/link";
import React, { useState } from "react";
import useScrollDirection from "../hooks/UseScrollDirection";
import { usePathname } from "next/navigation";
import useMobile from "../hooks/IsMobile";
import { signOut, useSession } from "next-auth/react";
import UserAvatar from "./user-avatar-mobile";
import { MdOutlinePrivacyTip } from "react-icons/md";
import PrivacyPolicyDialog from "./privacy-policy-dialog";

function Navigation() {
  const { data: session, status } = useSession();
  useScrollDirection();
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;

  return (
    <nav id="header" className=" sticky top-0 bg-background-color !z-50 min-h-[142px] mt-0 md:mt-10 lg:mt-14 mt flex items-center justify-between transition-transform ease-in-out duration-[0.2s]">
      <div>
        <div className="md:hidden flex items-center gap-3">
          <UserAvatar />

        </div>
        <Link href="/" className=" hover:text-secondary-text-color">
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
