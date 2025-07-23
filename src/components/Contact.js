import ResumeImg from "../assets/resume.png";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col bg-[#B59CCB] px-5 py-16 md:py-32 "
    >
      <div className="flex flex-col items-center md:pr-10">
        <h1 className=" text-4xl border-b-4 border-[#572b86] mb-5 w-[140px] font-bold ">
          Contact
        </h1>
        <p className="pb-5">
          I'm currently open to new opportunities. If you have any questions,
          feel free to reach out. I’d love to connect!
        </p>
        <p className="italic text-sm text-gray-100 mb-4">
          “Let’s build something amazing together.”
        </p>
        <p className="py-2">
          <span className="font-bold">Email : </span>
          <a
            href="mailto:bhavaniambrose2199@gmail.com"
            className="underline hover:text-[#E5DFF0] text-white"
          >
            bhavaniambrose2199@gmail.com
          </a>
        </p>
        <p className="py-2">
          <span className="font-bold ">Phone : </span>
          <a
            href="tel:+60125475767"
            className="underline hover:text-[#E5DFF0] text-white"
          >
            012-5475767
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
