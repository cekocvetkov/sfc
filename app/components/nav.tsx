"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import UserAvatar from "./user-avatar-mobile";
import useScrolledUp from "../hooks/use-scrolled-up";

type NavLinkProps = { href: string; label: string; active: boolean; tabIndex?: number };

function NavLink({ href, label, active, tabIndex }: NavLinkProps) {
  const color = active ? "text-primary-text-color" : "text-muted-text-color";
  return (
    <Link href={href} tabIndex={tabIndex} className={`label-caps transition-colors hover:text-primary-text-color ${color}`}>
      {label}
    </Link>
  );
}

type NavBarProps = { isActive: (href: string) => boolean; tabIndex?: number; leading?: React.ReactNode };

function NavBar({ isActive, tabIndex, leading }: NavBarProps) {
  return (
    <>
      <div className="flex items-center gap-4">
        {leading}
        <NavLink href="/" label="home" active={isActive("/")} tabIndex={tabIndex} />
      </div>
      <div className="flex gap-7">
        <NavLink href="/about" label="about" active={isActive("/about")} tabIndex={tabIndex} />
        <NavLink href="/search" label="search" active={isActive("/search")} tabIndex={tabIndex} />
      </div>
    </>
  );
}

function Navigation() {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;
  const scrolledUp = useScrolledUp();

  return (
    <>
      <nav id="header" className="flex justify-between items-center pt-14">
        <NavBar
          isActive={isActive}
          leading={
            <div className="md:hidden flex items-center">
              <UserAvatar />
            </div>
          }
        />
      </nav>
      <div className={`scroll-peek flex justify-between items-center ${scrolledUp ? "visible" : ""}`} aria-hidden={!scrolledUp}>
        <NavBar isActive={isActive} tabIndex={scrolledUp ? 0 : -1} />
      </div>
    </>
  );
}

export default Navigation;
