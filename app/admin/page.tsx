import { auth } from "@/auth";
import { prisma } from "@/app/prisma";
import { redirect } from "next/navigation";

interface UserWithComments {
    id: string;
    email: string;
    name: string | null;
    image: string | null;
    createdAt: Date;
    comments: {
        id: string;
        content: string;
        postSlug: string;
        createdAt: Date;
    }[];
}

export default async function AdminPage() {
    const session = await auth();

    // Debug logging
    console.log("Admin page - Session:", session);
    console.log("Admin page - User email:", session?.user?.email);

    // Check if user is authenticated and is the specific admin user
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!session?.user?.email || !adminEmail || session.user.email !== adminEmail) {
        console.log("Admin page - Access denied, redirecting to home");
        console.log("Expected admin email:", adminEmail);
        console.log("User email:", session?.user?.email);
        redirect("/");
    }

    // Fetch all users with their comments
    const usersWithComments: UserWithComments[] = await prisma.sfcuser.findMany({
        include: {
            comments: {
                orderBy: {
                    createdAt: "desc"
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return (
        <div>
            <h1>
                Admin Dashboard - Users & Comments
            </h1>

            <div>
                <table>
                    <thead className="text-left text-sm font-thin">
                        <tr className="border-b border-t border-border-color">
                            <th className="border-l border-r border-border-color py-2 px-2">
                                User
                            </th>
                            <th className="border-r border-border-color py-2 px-2">
                                Email
                            </th>
                            <th className="border-r border-border-color py-2 px-2">
                                Joined
                            </th>
                            <th className="border-r border-border-color py-2 px-2">
                                Comments
                            </th>
                            <th className="py-2 px-2 border-r border-border-color">
                                Last Comment
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-left">
                        {usersWithComments.map((user) => (
                            <tr key={user.id} className="border-b border-border-color">
                                <td className="border-l border-r border-border-color py-2 px-2">
                                    <div>
                                        <div>
                                            {user.image ? (
                                                <img
                                                    className="h-10 w-10 rounded-full"

                                                    src={user.image}
                                                    alt={user.name || "User"}
                                                />
                                            ) : (
                                                <div>
                                                    <span>
                                                        {user.name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div>
                                                {user.name || "No name"}
                                            </div>
                                            <div>
                                                ID: {user.id.slice(0, 8)}...
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-r border-border-color py-2 px-2">
                                    {user.email}
                                </td>
                                <td className="border-r border-border-color py-2 px-2">
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </td>
                                <td className="border-r border-border-color py-2 px-2">
                                    {user.comments.length}
                                </td>
                                <td className="py-2 px-2 border-r border-border-color">
                                    <div>
                                        {user.comments.length > 0 ? (
                                            <div>
                                                {user.comments.slice(0, 1).map((comment) => (
                                                    <div key={comment.id} className="mb-2">
                                                        <div className="text-xs text-secondary-text-color mb-1">
                                                            {new Date(comment.createdAt).toLocaleDateString()} - {comment.postSlug}
                                                        </div>
                                                        <div className="text-xs">
                                                            {comment.content.length > 100
                                                                ? `${comment.content.substring(0, 100)}...`
                                                                : comment.content
                                                            }
                                                        </div>
                                                    </div>
                                                ))}
                                                {user.comments.length > 3 && (
                                                    <div className="text-xs text-secondary-text-color mt-2">
                                                        +{user.comments.length - 3} more comments
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <span className="text-secondary-text-color">No comments</span>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {usersWithComments.length === 0 && (
                <div>
                    <p>No users found.</p>
                </div>
            )}

            <div>
                <p>Total users: {usersWithComments.length}</p>
                <p>Total comments: {usersWithComments.reduce((sum, user) => sum + user.comments.length, 0)}</p>
            </div>
        </div>
    );
}
