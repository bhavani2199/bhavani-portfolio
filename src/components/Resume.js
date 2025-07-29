import ResumeImg from "../assets/resume.png";

function Resume() {
  const config = {
    link: "/assets/Bhavani-Resume.pdf",
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-[#D7CDE5] px-5 py-12 items-center"
    >
      <div className="md:w-1/2 flex justify-end py-5">
        <img
          className="w-[400px]"
          src={ResumeImg}
          alt="Illustration of two professionals reviewing a resume
          with a large magnifying glass focusing on profile details"
        />
      </div>

      <div className="md:w-1/2 flex justify-center md:pr-10">
        <div className="flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl border-b-4 border-[#572b86] mb-5 w-[140px] font-bold ">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume{" "}
            <a className="btn" href={config.link} download="Bhavani-Resume.pdf">
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
