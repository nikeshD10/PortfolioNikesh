import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const MenuOverlay = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <ul className=" flex flex-col py-4 items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            key={link.title}
            href={link.path}
            title={link.title}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            setTimeOfLastClick={setTimeOfLastClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
