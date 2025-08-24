import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { MdCloud } from "react-icons/md"; // For Atlas cloud icon

const Technology = () => {
  return (
    <div id="Technologies" className="p-6 md:p-10 mx-4 md:mx-16 overflow-hidden4">
      <h1 className="text-3xl text-white md:text-4xl font-bold mb-6 text-center md:text-left font-serif lg:pl-135">
        👩‍💻Technologies
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <FaHtml5 color="#E34F26" size={80} />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">HTML</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <FaCss3Alt color="#1572B6" size={80} />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">CSS</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <FaJs color="#F7DF1E" size={80} />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">JAVASCRIPT</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <FaReact color="#61DAFB" size={80} />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">REACT</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <SiMongodb color="#47A248" size={80} />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">MONGO DB</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <FaNodeJs color="#47A248" size={80} />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">NODE JS</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <SiTailwindcss color="#38B2AC" size={80} />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">TAILWIND CSS</h2>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <SiExpress  size={80} color="white" />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">EXPRESS</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 bg-opacity-40 rounded-xl mt-4 hover:scale-105 hover:shadow-xl hover:bg-gray-800 transition-transform duration-300">
          <MdCloud size={80} color="white" />
          <h2 className="text-white font-extrabold text-lg md:text-2xl mt-2 text-center">MONGO DB ATLAS</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Technology;
