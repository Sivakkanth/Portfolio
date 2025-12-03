'use client';
import { Github, Instagram, Facebook, Linkedin, Mail, Youtube, Figma } from "lucide-react";
import TypedText from './TypedText';

export default function HomeSection() {
  return (
    <section id="home" className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 xl:px-0">
      <div className="grid grid-cols-1 xl:grid-cols-3 items-center w-full
        relative overflow-hidden
        min-h-screen
        pt-24"
      >
        {/* Left Content */}
        <div className="xl:col-span-2 z-10 w-full mt-32 sm:mt-64 sm:mt-72 xl:mt-20 animate-slideDown bg-[#030c29] bg-opacity-70 rounded-tl-[100px] rounded-tr-[300px] py-8 px-6 md:px-12 lg:px-20 border-l-4 border-cyan-400">
          <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
            Hey there! I'm
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
            Sivakkanth Karunakaran
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mt-3">
            And I'm a{" "}
            <span className="text-cyan-400">
              <TypedText />
            </span>
          </h2>

          <p className="mt-6 text-gray-300 text-md md:text-xl leading-relaxed">
            I am an expert in Full Stack Web Development, Front-End Development, Back End Development and Mobile App Development
            . And also I will design and develop modern and responsive websites
            and mobile apps. I love building websites & Mobile Apps. If you're looking
            for a custom and unique website, feel free to contact me, and I'll be glad
            to help you with your project!
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            {[
              { icon: <Linkedin className="w-5 h-5 md:w-10 md:h-10"/>, link: 'https://www.linkedin.com/in/sivakkanth/' },
              { icon: <Github className="w-5 h-5 md:w-10 md:h-10"/>, link: 'https://github.com/Sivakkanth' },
              { icon: <Mail className="w-5 h-5 md:w-10 md:h-10"/>, link: 'mailto:sivakanth2000s@gmail.com' },
              { icon: <Youtube className="w-5 h-5 md:w-10 md:h-10"/>, link: 'https://www.youtube.com/@Sivakkanth' },
              { icon: <img className="bg-cyan-400 rounded-full" src="..\Image\fiverr.png" alt="fiverrImg"/>, link: 'https://www.fiverr.com/asivabkanth' },
              { icon: <Figma className="w-5 h-5 md:w-10 md:h-10"/>, link: 'https://www.figma.com/@asivabkanth' },
              { icon: <Facebook className="w-5 h-5 md:w-10 md:h-10"/>, link: 'https://web.facebook.com/siva.kanth.1238' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="
                  border-2
                  border-cyan-400 
                  text-cyan-400 
                  w-8 md:w-12 
                  h-8 md:h-12 
                  rounded-full 
                  flex 
                  justify-center 
                  items-center 
                  text-xl
                  hover:shadow-md
                  hover:shadow-cyan-400 
                  hover:scale-110
                  transition
                "
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#about"
            className="
              mt-10 
              inline-block 
              bg-cyan-500 
              text-[#030c29]
              font-semibold 
              px-10 
              py-3 
              rounded-full 
              text-lg
              hover:bg-cyan-400 
              transition
            "
          >
            More About Me
          </a>
        </div>

        {/* Right Side Profile Image */}
        <div className="absolute z-0 w-full -right-20 sm:-right-40 top-10 sm:top-0 md:-top-10 xl:top-0 flex justify-end items-center animate-slideUp">
          <img
            src="/image/3.png"
            alt="Profile"
            className="object-contain w-full max-w-3xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030c29] to-transparent"></div>
      </div>
    </section>
  );
}