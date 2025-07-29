function Contact() {
  const config = {
    email: "bhavaniambrose2199@gmail.com",
    phone: "012-5475767",
  };

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
            {config.email}
          </a>
        </p>
        <p className="py-2">
          <span className="font-bold ">Phone : </span>
          <a className="text-white">{config.phone}</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
