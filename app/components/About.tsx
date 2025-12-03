import { Download } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 text-white z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                About <span className="text-[#0ef]">Me</span>
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-[#0ef] overflow-hidden">
                <img src="../Image/4.jpg" alt="CV" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                    Full Stack Web Developer | Front-End Developer | Mobile App Developer | Back End Developer
                </h4>
                <p className="text-sm md:text-lg text-justify mb-6">
                    👋 Hey there! I'm Sivakkanth Karunakaran, a passionate Computer Engineering undergraduate from the University of Ruhuna with a solid grounding in front-end development. With hands-on experience in creating dynamic web and mobile applications, I bring versatility and a proactive approach to every project. 🌐 I've developed some websites, mobile apps, and desktop applications, diving deep into technologies like Next Js, React Js, React Native, and Flutter with Tailwind CSS. In addition to my technical skills, I am well-versed in Agile Project Management and thrive in collaborative environments.
                </p>

                <div className="flex justify-center md:justify-end mb-6">
                    <a href="../CV.pdf" download className="inline-flex items-center px-6 py-3 bg-[#0ef] text-[#081b29] font-semibold rounded-full hover:shadow-lg transition duration-300">
                        Download CV
                        <Download className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
