import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const config = {
    social: {
      github: "https://github.com/bhavani2199",
      linkedin: "https://www.linkedin.com/in/bhavani-ambrose/",
    },
  };

  return (
    <section
      id="projects"
      className=" py-2 bg-[#674d83] text-center text-white"
    >
      <div className="flex justify-center items-center space-x-4 mt-1">
        <a
          href={config.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white hover:text-black text-xl" />
        </a>
        <a
          href={config.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white hover:text-[#0077b5] text-xl" />
        </a>
      </div>
      <div className="space-x-4 m-2">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#resume" className="hover:underline">
          Resume
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
      <a href="#top" className="block mt-2 text-sm hover:underline">
        ↑ Back to top
      </a>
      <p className="italic text-sm m-1 text-[#D7CDE5]">
        Built with 💜 by Bhavani Ambrose
      </p>
      <div className="text-sm">&copy; BAcode 2025</div>
    </section>
  );
}

export default Footer;
