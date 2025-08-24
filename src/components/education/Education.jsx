import React from "react";
import { GraduationCap } from "lucide-react"; // Education Icon

// LeetCode Logo SVG
const LeetCodeLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-500"
  >
    <path d="M15 18l6-6-6-6" />
    <path d="M8.5 6.5l7 7-7 7" />
    <path d="M2 12h2" />
  </svg>
);

const Education = () => {
  return (
   <div className="w-full px-6 md:px-20 py-20 bg-blue-950-50 flex flex-col items-center">
  <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
    🎓 Achievements & Education
  </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-0 pb-0">
        {/* LeetCode Card */}
        <div className="bg-blue-100 shadow-md rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-lg hover:bg-amber-100">
          
            <LeetCodeLogo />
            <h2 className="flex items-center gap-3 mb-4 text-blue-400 font-bold text-xl">LeetCode Profile</h2>
            <a
            href="https://leetcode.com/u/nimrat_kaur/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-4 text-indigo-600 font-bold lg:text-xl hover:text-indigo-800 hover:underline text-sm"

          >
            https://leetcode.com/u/nimrat_kaur/
          </a>
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Global Rank:</span>{" "}
              <span className="text-green-600 font-bold">2,48,577</span>
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Problems Solved:</span> 500+
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Contest Rating:</span> 1500+
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-blue-100 shadow-md rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-lg hover:bg-amber-100">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-blue-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-indigo-600">Education</h2>
          </div>

          {/* BTech */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              B.Tech in Computer Science
            </h3>
            <p className="text-gray-600">
              Guru Nanak Dev University, Amritsar
            </p>
            <p className="text-gray-600">
              Currently in <span className="font-semibold">3rd Year</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Current CGPA:</span> 9.08
            </p>
          </div>

          {/* 12th */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Class XII – ICSE
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Percentage:</span> 89.6%
            </p>
            <p className="text-gray-600">
              Holy Family Convent School, Punjab
            </p>
          </div>

          {/* 10th */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Class X – ICSE
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Percentage:</span> 96.4%
            </p>
            <p className="text-gray-600">
              Holy Family Convent School, Punjab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
