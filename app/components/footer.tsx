"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlinePrivacyTip } from "react-icons/md";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import PrivacyPolicyDialog from "./privacy-policy-dialog";

function Footer() {
  const { data: session, status } = useSession();
  const currentYear = new Date().getFullYear();
  const [showLogout, setShowLogout] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  return (
    <footer className="fixed bottom-0 left-0 w-full py-10 text-center hidden flex-col gap-y-3 md:flex [@media_((max-height:800px)_and_(min-width:948px))]:py-1 [@media_((max-height:800px)_and_(min-width:948px))]:mt-[-100px] ">
      <div className="flex justify-center gap-x-4 [@media_((max-height:800px)_and_(min-width:948px))]:hidden">
        <Link aria-label="LinkedIn Link" href="https://linkedin.com/in/tsvetkov-tsvetan">
          <IoLogoLinkedin size={24} />
        </Link>
        <Link aria-label="Github Link" href="https://github.com/cekocvetkov">
          <IoLogoGithub size={24} />
        </Link>


        {status === "loading" ? (
          <div>Checking if logged in...</div>
        ) : session ? (
          <div className="flex gap-3">
            <div className="relative">
              <div className="relative group" onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)}>
                <Image
                  src={session.user?.image || ""}
                  onClick={() => signOut()}
                  width={25}
                  height={25}
                  alt="User Image"
                  className="rounded-full cursor-pointer -mt-0.5 hover:opacity-80 transition-opacity"
                />
                {showLogout && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-white text-sm rounded-md whitespace-nowrap bg-neutral-800">
                    Click here to logout
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 -bottom-1"></div>
                  </div>
                )}
              </div>
              {showLogout && <button onClick={() => signOut()} className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-full h-full opacity-0" />}
            </div>
            <div className="relative group">
              <MdOutlinePrivacyTip
                size={24}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowPrivacyDialog(true)}
              />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 text-white text-sm rounded-md py-1 px-3 whitespace-nowrap">
                Privacy Policy
              </span>
            </div>

            <PrivacyPolicyDialog
              isOpen={showPrivacyDialog}
              onClose={() => setShowPrivacyDialog(false)}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <p className="text-primary-text-color">Copyright &copy; {currentYear} Tsvetan Tsvetkov</p>
    </footer>
  );
}

export default Footer;
