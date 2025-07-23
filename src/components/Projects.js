import netflixclone from "../assets/netflix clone.jpg";
import blogwebsite from "../assets/blog website.jpg";
import ecommerce from "../assets/ecommerce.jpg";

function Projects() {
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
          These are some of my projects. I have built these with React, MERN,
          Redux and Tailwind CSS. Check them out.
        </p>
        <p></p>
      </div>
      <div div className=" text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-white">
          <div className="project-overlay group">
            <img
              className="w-full h-full object-cover"
              src={netflixclone}
              alt="Netflix Clone"
            />
            <div className="project-text group-hover:opacity-100">
              <p>Netflix Clone Website, built with React and Firebase.</p>
            </div>
          </div>
          <div className="project-overlay group">
            <img
              className="w-full h-full oject-cover"
              src={blogwebsite}
              alt="Blog Website"
            />
            <div className="project-text group-hover:opacity-100">
              <p>
                Modern Blog Website, built with React, Redux and Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="project-overlay group">
            <img
              className="w-full h-full object-cover"
              src={ecommerce}
              alt="Ecommerce Website"
            />
            <div className="project-text group-hover:opacity-100">
              <p>Ecommerce Website, built with MERN Stack.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
