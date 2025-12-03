// app/components/ProjectsSection.tsx
'use client';

import { ArrowRight, ExternalLink, View } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  videoUrl: string;
  imageUrl: string;
  description: string;
  projectLink: string;
}

const projects: Project[] = [
  {
    title: 'Crypto Currency Management System',
    videoUrl: 'https://www.youtube.com/embed/XcpPwtxCeTA?autoplay=1&mute=1',
    imageUrl: '../Image/crypto.png',
    description:
      'It serves as a centralized platform for users to manage cryptocurrencies and conduct monetary transactions securely and efficiently. I focused a pivotal role in conceptualizing, designing, and implementing this comprehensive solution, ensuring its functionality and usability met the highest standards.',
    projectLink: '/1',
  },
  {
    title: 'Sample DashBoard (dappr)',
    videoUrl: 'https://www.youtube.com/embed/ufGk9rdNpfI?autoplay=1&mute=1',
    imageUrl: '../Image/DashBoard.jpeg',
    description:
      'The Sample Dashboard is a dynamic and fully responsive web application developed to demonstrate proficiency in front-end development using modern technologies. Created as a project for a Fiverr freelance client, this dashboard highlights the ability to design and implement a professional user interface that adapts seamlessly across various devices.',
    projectLink: '/2',
  },
  {
    title: 'Job Portal Mobile App (JobGods)',
    videoUrl: 'https://www.youtube.com/embed/sZNc7P7yzeo?autoplay=1&mute=1',
    imageUrl: '../Image/JobGods.png',
    description:
      'JobGods is an innovative mobile application designed to bridge the gap between job seekers and potential employers. It simplifies the process of finding employment opportunities and managing job applications.',
    projectLink: '/3',
  },
  {
    title: 'Portfolio (Softpro)',
    videoUrl: 'https://www.youtube.com/embed/69-GnADoAf4?autoplay=1&mute=1',
    imageUrl: '../Image/portfolio.png',
    description:
      'This portfolio website showcases my expertise in web development, design, and user experience. It serves as a comprehensive platform to present my skills, projects, and professional journey.',
    projectLink: '/4',
  },
  {
    title: 'Student Management System',
    videoUrl: 'https://www.youtube.com/embed/aOy34Uft1pY?autoplay=1&mute=1',
    imageUrl: '../Image/Home.png',
    description:
      'The Student Management System is a desktop application developed to efficiently manage student details. Utilizing the WPF.NET Desktop Application Framework with C#, this project provides a comprehensive and user-friendly interface for handling student information.',
    projectLink: '/5',
  },
];

export default function Project() {
  return (
    <section id="project" className="w-full px-10 py-16 z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Latest <span className="text-[#0ef]">Projects</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative w-80 md:w-96 border-2 border-cyan-500 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <h5 className="text-xl font-semibold my-2 text-center">{project.title}</h5>
            <iframe
              className="w-full h-48 md:h-60"
              src={project.videoUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={384}
              height={216}
              className="w-full h-48 md:h-60 object-cover"
            />
            <div className="p-4 bg-[#060d45]/70 absolute bottom-0 w-full h-full flex flex-col justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <p className="text-md font-semibold mb-2 bg-[#0ef] text-[#060d45] p-3 rounded">{project.description}</p>
              <Link
                href={project.projectLink}
                className="gap-2 inline-block transition-shadow duration-300 justify-center flex items-center mt-2"
              >
                <ExternalLink className="w-12 h-12 bg-[#0ef] text-[#060d45] py-2 px-4 rounded-full shadow-lg hover:shadow-[#0ef]/50 transition-shadow duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}