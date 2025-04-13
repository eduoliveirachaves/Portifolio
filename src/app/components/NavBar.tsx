"use client";
import { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Sobre mim",
    path: "#about"
  },
  {
    title: "Projetos",
    path: "#projects"
  },
  {
    title: "Contato",
    path: "#contact"
  }
];

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="fixed mx-auto border-b  border-gray-950 top-0 left-0 right-0 z-11 bg-[rgba(18,18,18,0.9)] backdrop-blur-md lg:h-24 sm:h-15 h-26">
      <div className="flex container flex-wrap lg:py-4 items-center justify-between mx-auto p-4 px-8 -mt-5">
        <Image
          src="/images/logo-removebg-preview.png"
          alt="logo"
          width={100}
          height={100}
          className="sm:w-20 sm:h-20 lg:w-30 lg:h-30"
        />
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto  mb-4" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
