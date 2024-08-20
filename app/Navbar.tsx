import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";

const Navbar = () => {
  const Links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "issues" },
  ];
  return (
    <nav className="flex h-14 border-b items-center space-x-6 px-5 mb-5">
      <Link href={"/"}>
        <FaBug size={25} />
      </Link>
      <ul className="flex space-x-6 ">
        {Links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
