import netflixclone from "../assets/netflix clone.jpg";
// import blogwebsite from "../assets/blog website.jpg";
// import ecommerce from "../assets/ecommerce.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const config = {
    projects: [
      {
        image: netflixclone,
        description:
          "Netflix Clone Website built with React and deployed on Netlify.",
        link: "https://shiny-liger-2cb658.netlify.app/",
      },
      // {
      //   image: blogwebsite,
      //   description:
      //     "Modern Blog Website, built with React, Redux and Tailwind CSS.",
      //   link: "",
      // },
      // {
      //   image: ecommerce,
      //   description: "Ecommerce Website, built with MERN Stack.",
      //   link: "",
      // },
    ],
  };

  // const settings = {
  //   slidesToShow: 2, // show 2 on desktop
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1, // show 1 on mobile
  //       },
  //     },
  //   ],
  // };

  return (
    <section
      id="projects"
      className="flex flex-col pt-10 pb-20 px-16 bg-[#F3EFF5]"
    >
      <div className="px-5 mb-10">
        <h1 className="text-4xl font-bold border-b-4 w-[140px] border-[#572b86] ">
          Projects
        </h1>
        <p className="mt-5">
          Here is my project. I have built this with React, JavaScript, HTML and
          CSS. Check them out.
        </p>
      </div>
      {/* <Slider {...settings}> */}
      {config.projects.map((project, index) => (
        <div key={index} className="px-5">
          <div className="project-overlay group">
            <img
              src={project.image}
              alt={project.description}
              className="w-full h-full object-cover"
            />
            <div className="project-text group-hover:opacity-100">
              <div>
                <p className="mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#572b86] px-4 py-2 rounded hover:bg-[#6d3ea1] transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* </Slider> */}
    </section>
  );
}

export default Projects;
