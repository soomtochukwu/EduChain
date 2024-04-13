import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./header.css";
const paths = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/dashboard",
    name: "Dashboard",
  },
  {
    href: "/",
    name: "others",
  },
];

const Header = () => {
  return (
    <div className=" relative flex items-center bg-gray-900 p-2">
      <div className="flex items-center *:mx-2">
        <Image src={"/logo.jpeg"} alt={"logo"} height={50} width={50}></Image>
        <nav className="*:mx-3">
          {paths.map((link) => {
            return (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="absolute right-6">
        <button className="connect">connect wallet</button>
      </div>
    </div>
  );
};

export default Header;
