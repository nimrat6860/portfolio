import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
      {/* Logo */}
      <span className="text-5xl font-bold tracking-wide font-serif text-blue-300 mt-4 ">
        Portfolio
      </span>

      {/* Links */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } mx-24 mt-4 font-semibold bg-black px-4 py-2 rounded-xl bg-opacity-30 text-center 
        md:mt-0 md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 text-xl p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Technologies">
          <li className="text-md transition-all duration-300 text-xl p-1 md:p-0">
            Technologies
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 text-xl p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 text-xl p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      <hr className="w-screen border-t-2 border-white-500 my-9" />

      {/* Mobile Menu Button */}
      {menuOpen ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => setMenuOpen(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
