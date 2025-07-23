import AboutImg from "../assets/about.png";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row bg-[#E5DFF0] px-5 py-5 items-center"
    >
      <div className="md:w-1/2 flex justify-center items-center py-5">
        <img src={AboutImg} alt="Illustration of a woman coding on a laptop" />
      </div>

      <div className="md:w-1/2 flex justify-center md:pr-10">
        <div className="flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl border-b-4 border-[#572b86] mb-5 w-[180px] font-bold ">
            About Me
          </h1>
          <p className="pb-5">
            Hi, I'm Bhavani Ambrose, a passionate Front-End Developer. I enjoy
            building responsive and user-friendly web interfaces using React,
            JavaScript and Tailwind CSS.
          </p>
          <p className="pb-5">
            I'm currently upskilling through the Meta Front-End Developer
            Certificate and working on real-world projects to sharpen my skills.
          </p>
          <p>
            I'm developing proficiency in Redux, Redux toolkit, Axios, Tailwind
            CSS and version control.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
