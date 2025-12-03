'use client';

import React from 'react';

const technicalSkills = [
  { name: 'Web Development Technologies', tools: 'HTML, CSS, JavaScript', percentage: 90 },
  { name: 'Frameworks and Libraries', tools: 'React JS, React Native, Flutter, Tailwind CSS, Bootstrap', percentage: 85 },
  { name: 'Backend Technologies and Databases', tools: 'Node JS, Next JS, MySQL, Firebase, MongoDB', percentage: 80 },
  { name: 'UI/UX Design', tools: 'Figma', percentage: 75 },
  { name: 'Version Control', tools: 'GitHub', percentage: 70 },
  { name: 'Web Application Framework', tools: 'ASP.net', percentage: 65 },
  { name: 'Programming Languages', tools: 'Java, C#, C, C++, Python', percentage: 85 },
];

const professionalSkills = [
  { name: 'Creativity', percentage: 90 },
  { name: 'Problem Solving', percentage: 80 },
  { name: 'Communication', percentage: 65 },
  { name: 'Team Work', percentage: 85 },
  { name: 'Leadership', percentage: 75 },
  { name: 'Presentation', percentage: 70 },
];

const Skill: React.FC = () => {
  return (
    <section id="skill" className="py-20 text-white max-w-7xl mx-auto z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-[#0ef]">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6 text-center underline">Technical Skills</h2>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-cyan-400">{skill.percentage}%</span>
                  </div>
                  <h6 className="text-sm text-yellow-100 font-medium mb-1">{skill.tools}</h6>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-[#0ef] transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6 text-center underline">Professional Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-center">
              {professionalSkills.map((skill, index) => {
                const radius = 80;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (circumference * skill.percentage) / 100;

                return (
                  <div key={index} className="flex flex-col items-center relative">
                    <svg width={150} height={150} viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        stroke="null"
                        strokeWidth={12}
                        fill="transparent"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        stroke="#0ef"
                        strokeWidth={12}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                    </svg>
                    <div className="absolute text-xl font-semibold top-0 right-0">{skill.percentage}%</div>
                    <div className="mt-4 text-center">{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;