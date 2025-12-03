// app/components/ExperienceSection.tsx
import { Building, GraduationCap, School } from "lucide-react";
import { FC, ReactNode } from "react";
import { BsBank } from "react-icons/bs";

interface Experience {
  title: string;
  description: string;
  date: string;
  icon: ReactNode;
}

const experiences: Experience[] = [
  {
    title: "Intern Software Engineer at Effective Solution Pvt Ltd",
    description: "Worked as an Intern Software Engineer at Effective Solution Pvt Ltd, gaining hands-on experience in software development and collaborating with a dynamic team.",
    date: "July 2024 - Jan 2025",
    icon: <Building className="w-12 h-12" />,
  },
  {
    title: "Computer Engineering undergraduate Galle, Sri Lanka",
    description: "I am currently a third-year undergraduate student pursuing studies in Computer Engineering.",
    date: "Mar 2021 - Present",
    icon: <GraduationCap className="w-12 h-12" />,
  },
  {
    title: "Counter Clerk",
    description: "I delivered exceptional customer service as a Counter Clerk at People's Bank in Kiran, Batticaloa, Sri Lanka",
    date: "Feb 2020 - Feb 2021",
    icon: <BsBank className="w-12 h-12" />,
  },
  {
    title: "Student",
    description: "I pursued a Diploma in ICT & English at IDM Nations Campus.",
    date: "Sep 2019 - Jan 2020",
    icon: <School className="w-12 h-12" />,
  },
  {
    title: "Student",
    description: "I studied my advance level at Bt/KK/Kiran Central College.",
    date: "2019",
    icon: <Building className="w-12 h-12" />,
  },
];

const TimelineItem: FC<{ experience: Experience, position: number }> = ({ experience, position }) => (
  <div className="relative ml-12 md:ml-0`">
    <div className={`grid md:grid-cols-2 items-center`}>
        <span className={`${position % 2 === 0 ? 'order-2' : 'order-1'} hidden md:block top-1/2 backdrop-blur-sm bg-cyan-300/30 py-6 rounded-xl border border-blue-400/20 shadow-lg shadow-blue-500/10 text-white text-xl font-semibold text-center`}>
          {experience.date}
        </span>
        <div className="flex justify-center md:justify-center items-center w-20 h-20 absolute top-1/2 left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-black border-4 border-[#0ef] text-white rounded-full z-10">
          <div className="w-16 h-16 text-[#0ef] rounded-full flex items-center justify-center">
            {experience.icon}
          </div>
        </div>
        <div className={`${position % 2 === 0 ? 'order-1 md:text-right border-l-4 border-r-0 md:border-r-4 md:border-l-0' : 'order-2 md:text-left border-l-4 ml-0 md:-ml-[3px]'} border-yellow-300 py-12`}>
          <div className={`${position % 2 === 0 ? "pr-12 pl-12 md:pl-6" : "pl-12 pr-6"} bg-cyan-900/70 backdrop-blur-sm py-6 rounded-xl border border-cyan-400/20 shadow-lg shadow-blue-500/10 text-white`}>
            <h5 className="text-xl font-semibold mb-2">{experience.title}</h5>
            <p className="text-gray-300 mb-4">{experience.description}</p>
            <span className="text-yellow-300 text-sm">{experience.date}</span>
          </div>
        </div>
    </div>
  </div>
);


const ExperienceSection: FC = () => {
  return (
    <section id="experience" className="py-16 text-white z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-[#0ef]">Experiences</span>
        </h2>
        <div className="">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              experience={exp}
              position={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;