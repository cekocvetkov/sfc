"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

interface PrivacyPolicyDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyPolicyDialog({ isOpen, onClose }: PrivacyPolicyDialogProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-code-snippet-background-color border border-border-color rounded-lg max-w-xl w-full max-h-[80vh] overflow-y-scroll [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-[#2a2a2a] [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-[#555555] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:hover:bg-[#666666]">
                <div className="flex justify-between items-center p-6 border-b border-border-color">
                    <h2 className="text-xl font-bold text-primary-text-color">Privacy Policy</h2>
                    <button
                        onClick={onClose}
                        className="text-primary-text-color hover:text-secondary-text-color transition-colors"
                    >
                        <IoClose size={24} />
                    </button>
                </div>
                <div className="p-6 text-primary-text-color space-y-4 text-left">

                    <section>
                        <h3 className="text-lg font-semibold mb-2">What is this website about
                        </h3>
                        <p className="text-sm mb-2">
                            This is a personal technical blog about software development. I keep things simple and <span className="font-semibold"> only collect the minimum data needed for you to comment on posts.</span>
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-2">What data is collected
                        </h3>
                        <p className="text-sm mb-2">When you sign in with GitHub to comment, I store:</p>
                        <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                            <li>Your GitHub username</li>
                            <li>Your email address from GitHub</li>
                            <li>Your GitHub profile image URL</li>
                            <li>The comments you write</li>
                        </ul>
                        <p className="text-sm mt-2">That's it. No tracking, no analytics cookies, no marketing data.</p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-2">Why I Collect This Data</h3>
                        <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                            <li>Username & profile image: To display with your comments</li>
                            <li>Email: To associate your comments with your account (not displayed publicly)</li>
                            <li>Comments: Well... to show your comments on the website</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-2">How I Use GitHub OAuth</h3>
                        <p className="text-sm mb-2">I use GitHub's authentication service so you can log in. When you do this:</p>
                        <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                            <li>GitHub's privacy policy applies to their login process</li>
                            <li>I only receive the basic profile info mentioned above</li>
                            <li>No passwords are stored on my end</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-2">Cookies</h3>
                        <p className="text-sm mb-2">The site uses essential cookies for:</p>
                        <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                            <li>Keeping you logged in during your session</li>
                            <li>Making the GitHub authentication work</li>
                        </ul>
                        <p className="text-sm mt-2">No tracking or advertising cookies.</p>
                    </section>
                    <section>
                        <h3 className="text-lg font-semibold mb-2">Your Rights (GDPR)</h3>
                        <p className="text-sm mb-2">You can:</p>
                        <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                            <li>Delete your account: Use the delete account button in your profile to remove all your data</li>
                            <li>Export your data: Contact me if you want a copy of your comments</li>
                        </ul>
                        <p className="text-sm mt-2">When you delete your account, I remove your profile info and all your comments permanently.</p>
                    </section>
                    <section className="mb-2">
                        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                        <p className="text-sm">
                            If you have any questions about this Privacy Policy, please contact me at:{" "}
                            <a href="mailto:c.y.cvetkov@gmail.com" className="text-secondary-text-color hover:underline">
                                c.y.cvetkov@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
                <div className="h-1"></div>
            </div>
        </div>
    );
} 