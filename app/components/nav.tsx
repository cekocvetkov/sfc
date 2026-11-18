"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import UserAvatar from "./user-avatar-mobile";
import useScrolledUp from "../hooks/use-scrolled-up";

function NavLinks({ isActive }: { isActive: (href: string) => boolean }) {
  const linkClass = (href: string) =>
    `transition-colors hover:text-primary-text-color ${isActive(href) ? "text-primary-text-color" : "text-muted-text-color"}`;
  return (
    <div className="label-caps flex gap-7">
      <Link href="/about" className={linkClass("/about")}>
        about
      </Link>
      <Link href="/search" className={linkClass("/search")}>
        search
      </Link>
    </div>
  );
}

function Navigation() {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;
  const scrolledUp = useScrolledUp();

  return (
    <>
      <nav id="header" className="flex justify-between items-baseline pt-14">
        <div className="flex items-center gap-3">
          <div className="md:hidden flex items-center">
            <UserAvatar />
          </div>
          <Link href="/" className="text-lg tracking-wide hover:text-secondary-text-color transition-colors">
            home
          </Link>
        </div>
        <NavLinks isActive={isActive} />
      </nav>
      <div className={`scroll-peek flex justify-between items-baseline ${scrolledUp ? "visible" : ""}`} aria-hidden={!scrolledUp}>
        <Link href="/" tabIndex={scrolledUp ? 0 : -1} className="tracking-wide hover:text-secondary-text-color transition-colors">
          home
        </Link>
        <NavLinks isActive={isActive} />
      </div>
    </>
  );
}

export default Navigation;
