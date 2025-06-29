"use client";

import Link from "next/link";
import { FaComments } from "react-icons/fa";

export default function CommentsLink() {
  return (
    <Link
      href="#comments-section"
      className=""
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("comments-section")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <FaComments size={24} className="hover:text-secondary-text-color" />
    </Link>
  );
}
