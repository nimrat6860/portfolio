import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-blue-950-50 text-white p-8 md:p-12 flex flex-col md:flex-row md:justify-between items-center gap-8 border-2"
    >
      {/* Contact Title */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <h3 className="text-sm md:text-lg font-normal">
          Feel free to reach out!
        </h3>
      </div>

      {/* Contact Info */}
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-lg">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <span>nimrat628@gmail.com</span>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <span>nimrat-kaur</span>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <span>nimrat6860</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
