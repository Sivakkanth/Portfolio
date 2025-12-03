'use client';
import Image from 'next/image';

export default function Hire() {
  return (
    <section
      id="hire"
      className="z-10 relative w-full text-white py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src="/Image/hire.jpg"
          alt="hire background animation"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="hire max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Hire <span className="text-[#0ef]">Me</span>
        </h2>

        <h4 className="text-xl md:text-2xl font-semibold text-gray-200">
          I'm <span className="text-[#0ef]">Available</span> for freelancing
        </h4>

        <p className="mt-10 text-[17px] md:text-[20px] leading-relaxed font-medium px-2 md:px-6">
          As a freelancer, I am an expert in front-end web development, Mobile App Development,
          and UI Design, and I will design and develop modern and responsive
          websites and mobile apps. I have almost 2+ years of experience working
          with HTML, CSS, JavaScript, Dart, Figma, and SQL with frameworks and
          libraries like Tailwind CSS, React JS, React Native, and Flutter. I love
          my work, do creative stuff, and help others grow. If you're looking for
          a custom and unique website, feel free to contact me, and I'll be glad to
          help you with your project!
        </p>

        <h5 className="mt-10 text-[16px] md:text-[18px] font-medium leading-relaxed px-4">
          Interested in working together? Contact me directly at  
          <a
            href="mailto:sivakanth2000s@gmail.com"
            className="text-[#0ef] hover:text-white underline ml-1"
          >
            sivakanth2000s@gmail.com
          </a>
          .  
          Or hire me on <span className="text-[#0ef] font-semibold">Fiverr</span> using the button below.  
          I typically respond within 24 hours.
        </h5>

        <a
          href="https://www.fiverr.com/s/zWdGjZz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-12 px-8 py-3 bg-[#0ef] text-black font-semibold rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}