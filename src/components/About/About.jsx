import React from "react";
import AboutImg from "../../assets/avatar2.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white bg-auto bg-opacity-90 shadow-lg rounded-xl p-6 md:p-10 mx-4 md:mx-16 overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left font-serif">
        About Me
      </h2>

      {/* Image + Content */}
      <div className="md:flex md:items-start md:gap-100 bg-blend-screen  ">
        {/* Image */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg object-cover shadow-lg"
  src={AboutImg}
  alt="About img"
/>

        </div>

        {/* Skills / Roles */}
        <ul className="flex flex-col gap-5 mt-6 mb-6">
          {/* Frontend Developer */}
          <li className="flex gap-3 items-start hover:translate-x-2 transition-transform duration-300">
            <IoArrowForward size={28} className="mt-1 text-cyan-400" />
            <div className="max-w-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-cyan-100">
                Frontend developer
              </h3>
              <p className="md:text-sm leading-relaxed text-blue-200">
               “As a Frontend Developer, I create dynamic websites and web apps using React 
               and modern web technologies.”
              </p>
            </div>
          </li>

          {/* Database Developer */}
          <li className="flex gap-3 items-start hover:translate-x-2 transition-transform duration-300">
            <IoArrowForward size={28} className="mt-1 text-cyan-400" />
            <div className="max-w-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-cyan-100">
                Algorithm & Data Structures Enthusiast
              </h3>
              <p className="text-sm md:text-sm leading-relaxed text-blue-200">
                “I solve algorithmic and data structure problems using Java, improving my problem-solving and coding skills.”
              </p>
            </div>
          </li>

          {/* Backend Developer */}
          <li className="flex gap-3 items-start hover:translate-x-2 transition-transform duration-300">
            <IoArrowForward size={28} className="mt-1 text-cyan-400" />
            <div className="max-w-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-cyan-100">
                Backend developer
              </h3>
              <p className="text-sm md:text-sm leading-relaxed text-blue-200">
                “I am a Backend Developer and have built robust and efficient 
                server-side applications using Node.js, Express, and MongoDB.”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
