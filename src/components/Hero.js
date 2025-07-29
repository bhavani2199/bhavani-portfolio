import HeroImg from "../assets/hero.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Hero() {
  const config = {
    subtitle: "Aspiring Front-end developer",
    social: {
      linkedin: "https://www.linkedin.com/in/bhavani-ambrose/",
      github: "https://github.com/bhavani2199",
      gmail: "mailto:bhavaniambrose2199@gmail.com",
    },
  };

  return (
    <section className="flex flex-col md:flex-row items-center px-3 py-14 bg-[#F4F0F8] justify-center">
      <div className="md:w-1/2 font-hero-font px-4 py-5 bg-white/80 rounded-xl shadow-md">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Hi, <br /> I'm{" "}
          <span className="font-bold italic text-[#6A4E9D]">
            Bhavani Ambrose
          </span>
        </h1>
        <p className="text-xl md:text-2xl py-3 text-gray-700">
          {config.subtitle}
        </p>
        <div className="flex space-x-6 py-6">
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077b5] transition-all"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-all"
          >
            <FaGithub size={35} />
          </a>
          <a
            href={config.social.gmail}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D44638] transition-all"
          >
            <SiGmail size={35} />
          </a>
        </div>
      </div>
      <img
        className="md:w-1/3 fade-bottom"
        src={HeroImg}
        alt="Bhavani Ambrose profile illustration"
      />
    </section>
  );
}

export default Hero;
