"use client";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Logo from "../../../public/images/svgs/Logo.svg";
import useWindowSize from "../hooks/useWindowSize";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [height, width] = useWindowSize();
  const [wid, setWid] = useState(0);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    if (width > 868) {
      setNavbarOpen(false);
    }
  }, [width]);

  // useLayoutEffect(() => {
  //   if (width === 0) {
  //     setWid(window.innerWidth);
  //   } else {
  //     setWid(width);
  //   }
  // }, [width]);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useLayoutEffect(() => {
    const newIsScreenSmall =
      width === 0 ? window.innerWidth < 868 : width < 868;
    setIsScreenSmall(newIsScreenSmall);
  }, [width]);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav className="fixed z-30 border border-[#33353F] top-0 left-0 right-0 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          // className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src={Logo} alt="Logo" className="w-16  " />
        </Link>
        {/* <div className={`mobile-menu block md:hidden`}> */}
        <div className={`mobile-menu block ${isScreenSmall ? "" : "hidden"}`}>
          {navbarOpen ? (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon
                onClick={handleToggle}
                className="h-8 w-8 text-white"
              />
            </button>
          ) : (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon
                onClick={handleToggle}
                className="h-8 w-8 text-white"
              />
            </button>
          )}
        </div>
        {/* <div className="menu hidden md:block md:w-auto" id="navbar"> */}
        <div
          // className={`menu ${wid < 868 ? "hidden" : "block w-auto"}`}
          className={`menu ${isScreenSmall ? "hidden" : "block w-auto"}`}
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-2 mt-0">
            {navLinks.map((navLink, index) => (
              <NavLink
                key={navLink.title}
                href={navLink.path}
                title={navLink.title}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                setTimeOfLastClick={setTimeOfLastClick}
              />
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay />}
    </nav>
  );
};

export default Navbar;
