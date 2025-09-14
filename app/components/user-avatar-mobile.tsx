"use client";

import React, { useState } from 'react'
import Image from "next/image"
import { signOut, useSession } from "next-auth/react";
import { IoLogOutOutline } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import PrivacyPolicyDialog from './privacy-policy-dialog';

function UserAvatar() {
    const { data: session, status } = useSession();
    // const [showLogout, setShowLogout] = useState(false);
    const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);

    return (
        status === "loading" ? (
            <div>Checking if logged in...</div>
        ) : session ? (
            <div className="relative">
                <div className="relative group flex">
                    <Image
                        src={session.user?.image || ""}
                        width={40}
                        height={3}
                        alt="User Image"
                        className="rounded-full -mt-0.5 hover:opacity-80 transition-opacity border-2 border-white"
                    />
                    <div>
                        {session && (
                            <div className="relative bottom-2 left-1">
                                <MdOutlinePrivacyTip
                                    size={20}
                                    className=" cursor-pointer hover:opacity-80 transition-opacity text-primary-text-color"
                                    onClick={() => setShowPrivacyDialog(true)}
                                />

                            </div>
                        )}
                        <IoLogOutOutline className="ml-2 cursor-pointer" onClick={() => signOut()} />
                    </div>
                </div>
                <PrivacyPolicyDialog
                    isOpen={showPrivacyDialog}
                    onClose={() => setShowPrivacyDialog(false)}
                />
            </div>) : (
            <></>
        )
    )
}

export default UserAvatar