import React from "react";
import avatarImg from "../../assets/avatar.png";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full items-center md:items-start justify-between px-6 md:px-20 py-6 md:py-12 text-white">

      {/* Left Section */}
      <div className="w-full md:w-2/4 text-center md:text-left md:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
          Hello, I am Nimrat Kaur
        </h1>
        <p className="mt-4 text-sm md:text-base tracking-tight text-blue-300">
          I’m a Full-Stack Developer skilled in React, Tailwind, JavaScript,
          Node.js, Express, and MongoDB. I enjoy building responsive web apps
          and solving algorithmic problems in Java. Curious, detail-oriented,
          and persistent, I love learning new technologies and delivering
          efficient, user-friendly solutions.
        </p>
        <a href="#Footer">
          <button
            className="mt-6 text-white text-sm md:text-lg py-2 px-6 md:py-3 md:px-8 font-semibold rounded-3xl bg-blue-900 hover:opacity-85 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Contact Me
          </button>
        </a>
      </div>

      {/* Right Section (Image) */}
      <div className="mb-6 md:mb-0 flex justify-center md:justify-end">
        <img
          className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto rounded-lg object-cover shadow-lg"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
