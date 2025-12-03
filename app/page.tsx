import About from "./components/About";
import ContactSection from "./components/Contact";
import ExperienceSection from "./components/Experience";
import Header from "./components/Header";
import Hire from "./components/Hire";
import HomeSection from "./components/HomeSection";
import Project from "./components/Project";
import ScrollTopButton from "./components/ScrollTopButton";
import Service from "./components/Service";
import Skill from "./components/Skill";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col text-white relative w-full">
      <video autoPlay muted loop className="fixed w-full h-full object-cover">
        <source src="/backAnimation.mp4" type="video/mp4" />
      </video>
      <Header />
      <HomeSection />
      <About />
      <Service />
      <Skill />
      <Project />
      <ExperienceSection />
      <Hire />
      <ContactSection />
      <ScrollTopButton />
    </div>
  );
}