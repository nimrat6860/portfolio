import React from "react";

const ProjectCard = ({ title, main, demoLink, codeLink }) => {
  return (
    <div
      className="bg-[#0c0e19] w-full max-w-sm p-6 rounded-2xl shadow-xl shadow-slate-900 
                 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-950"
                 
    >
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-sm md:text-md mb-6 text-white leading-relaxed">
        {main}
      </p>
      <div className="flex gap-4">
        <button
          className="bg-[#465697] text-white py-2 px-4 rounded-3xl font-semibold 
                     text-sm md:text-lg hover:opacity-90 transition cursor-pointer "
          onClick={() => window.open(demoLink, "_blank")}
        >
          Demo
        </button>
        <button
          className="bg-[#465697] text-white py-2 px-4 rounded-3xl font-semibold 
                     text-sm md:text-lg hover:opacity-90 transition cursor-pointer"
          onClick={() => window.open(codeLink, "_blank")}
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
