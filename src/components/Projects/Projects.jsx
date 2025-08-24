import React from "react";
import ProjectCard from "./Projectcard";

const projects = [
  { title: "TextUtils App", 
    main: "Analyze and manipulate text efficiently", 
    demoLink:"https://nimrat6860.github.io/TextUtils/", 
    codeLink: "https://github.com/nimrat6860/TextUtils" ,
  },
  { title: "Calculator App", 
    main: "Perform basic arithmetic operations.",
    demoLink: "https://calculatorapp-yhc4.onrender.com", 
    codeLink: "https://github.com/nimrat6860/calculator" ,
  },
  { title: "Currency Converter", 
    main: "Convert currencies in real-time.",
    demoLink: "https://nimrat6860.github.io/currency-converter/", 
    codeLink: "https://github.com/nimrat6860/currency-converter"
   },
  { title: "Food Delivery App", 
    main: "Full-stack food ordering platform built with React and Node.js — currently under active development.",
    demoLink: "https://foodingo-app.onrender.com/", 
    codeLink: "https://github.com/nimrat6860/foodingo" }
];

export default function Projects() {
  return (
    <div id="Projects" className="px-6 md:px-20 py-20 bg-blue-950-50 bg-opacity-30 rounded-lg">
  <h1 className="text-3xl font-serif lg:pl-150 md:text-4xl text-white font-bold mb-12 text-center md:text-left">
    Projects
  </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 justify-items-center">
        {projects.map((proj, index) => (
          <ProjectCard key={index} title={proj.title} main={proj.main}  demoLink={proj.demoLink} 
            codeLink={proj.codeLink} image={proj.image}  />
        ))}
      </div>
    </div>
  );
}
