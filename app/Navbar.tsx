"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa6";
import classNames from "classnames";

const Navbar = () => {
  const Links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "issues" },
  ];

  const currentPath = usePathname();
  console.log(currentPath);
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
              className={classNames({
                "text-zinc-900": link.href == currentPath,
                "text-zinc-500": link.href != currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
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
