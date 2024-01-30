import Link from "next/link";
import { SectionName } from "@/lib/types";
import clsx from "clsx";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  title: string;
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const NavLink = ({
  href,
  title,
  activeSection,
  setActiveSection,
  setTimeOfLastClick,
}: NavLinkProps) => {
  const linkName = href.slice(1);
  return (
    <motion.li
      className="flex items-center justify-center relative w-full h-full px-3 py-2 focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
      onClick={() => {
        setActiveSection(linkName as SectionName);
        setTimeOfLastClick(Date.now());
      }}
      transition={{ duration: 0.1 }}
    >
      <Link
        href={href}
        className={clsx(
          " block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:text-lg lg:text-xl rounded md:p-0",
          {
            "text-white font-semibold": activeSection === linkName,
          }
        )}
      >
        {title}
        {linkName === activeSection && (
          <motion.span
            className="bg-gray-100 rounded-full absolute inset-0 -z-10  dark:bg-gray-800"
            layoutId="activeSection"
            transition={{ duration: 0.1 }}
          ></motion.span>
        )}
      </Link>
    </motion.li>
  );
};

export default NavLink;
