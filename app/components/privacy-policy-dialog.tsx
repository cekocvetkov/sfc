"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";

interface PrivacyPolicyDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyPolicyDialog({ isOpen, onClose }: PrivacyPolicyDialogProps) {
    const { data: session } = useSession();
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const handleDeleteAccount = async () => {
        if (!session?.user?.email) return;

        setIsDeleting(true);
        setDeleteError(null);

        try {
            const response = await fetch('/api/user/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to delete account');
            }

            const result = await response.json();
            console.log('Account deleted successfully:', result);

            // Sign out the user and close the dialog
            await signOut({ callbackUrl: '/' });
            onClose();
        } catch (error) {
            console.error('Error deleting account:', error);
            setDeleteError(error instanceof Error ? error.message : 'An unexpected error occurred');
        } finally {
            setIsDeleting(false);
            setShowConfirmDialog(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
            <div className="bg-code-snippet-background-color border border-border-color rounded-lg max-w-xl w-full max-h-[90vh] md:max-h-[80vh] overflow-y-scroll [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-[#2a2a2a] [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-[#555555] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:hover:bg-[#666666]">
                <div className="flex justify-between items-center p-4 md:p-6 border-b border-border-color">
                    <h2 className="text-lg md:text-xl font-bold text-primary-text-color">Privacy Policy</h2>
                    <button
                        onClick={onClose}
                        className="text-primary-text-color hover:text-secondary-text-color transition-colors p-1"
                    >
                        <IoClose size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>
                <div className="p-4 md:p-6 text-primary-text-color space-y-4 text-left">

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
                            <li>Delete your account: Use the delete account button below to remove all your data</li>
                            <li>Export your data: Contact me if you want a copy of your comments</li>
                        </ul>
                        <p className="text-sm mt-2">When you delete your account, I remove your profile info and all your comments permanently.</p>

                        {session && (
                            <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                <h4 className="text-sm font-semibold text-red-400 mb-2">Delete All My Data</h4>
                                <p className="text-xs text-red-300 mb-3">
                                    This will permanently delete your account and all your comments. This action cannot be undone.
                                </p>
                                {deleteError && (
                                    <p className="text-xs text-red-400 mb-3 bg-red-900/30 p-2 rounded">
                                        Error: {deleteError}
                                    </p>
                                )}
                                <button
                                    onClick={() => setShowConfirmDialog(true)}
                                    disabled={isDeleting}
                                    className="bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed text-white text-xs px-3 py-2 rounded transition-colors"
                                >
                                    {isDeleting ? 'Deleting...' : 'Delete My Account & Data'}
                                </button>
                            </div>
                        )}
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

            {/* Confirmation Dialog */}
            {showConfirmDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60 p-4">
                    <div className="bg-code-snippet-background-color border border-red-500/50 rounded-lg max-w-md w-full p-6">
                        <h3 className="text-lg font-semibold text-red-400 mb-4">Confirm Account Deletion</h3>
                        <p className="text-sm text-primary-text-color mb-4">
                            Are you sure you want to delete your account? This will permanently remove:
                        </p>
                        <ul className="text-sm text-primary-text-color list-disc list-inside mb-6 ml-4 space-y-1">
                            <li>Your user profile and account information</li>
                            <li>All your comments on all posts</li>
                            <li>Your GitHub authentication data</li>
                        </ul>
                        <p className="text-xs text-red-300 mb-6 bg-red-900/30 p-3 rounded">
                            ⚠️ This action cannot be undone. You will need to sign in again if you want to comment in the future.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setShowConfirmDialog(false)}
                                disabled={isDeleting}
                                className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                disabled={isDeleting}
                                className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed text-white rounded transition-colors"
                            >
                                {isDeleting ? 'Deleting...' : 'Yes, Delete Everything'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 