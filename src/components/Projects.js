import netflixclone from "../assets/netflix clone.jpg";
import blogwebsite from "../assets/blog website.jpg";
import ecommerce from "../assets/ecommerce.jpg";

function Projects() {
  return (
    <section className="flex flex-col py-10 px-5 items-center bg-[#F3EFF5]">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-[#9983AF] inline-block">
          Projects
        </h1>
      </div>
      <div div className=" text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-white">
          <div className="relative group overflow-hidden rounded-lg shadow-md h-[200px]">
            <img
              className="w-full h-full object-cover"
              src={netflixclone}
              alt="Netflix Clone"
            />
            <div className="absolute inset-0 bg-[#5E4B78]/90 opacity-0 group-hover:opacity-100 transition-opactiy duration-300 flex items-center justify-center text-center p-4">
              <p>Netflix Clone Website, built with React and Firebase.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-md h-[200px]">
            <img
              className="w-full h-full oject-cover"
              src={blogwebsite}
              alt="Blog Website"
            />
            <div className="absolute inset-0 bg-[#5E4B78]/90 opacity-0 group-hover:opacity-100 transition-opactiy duration-300 flex items-center text-center justify-center">
              <p>
                Modern Blog Website, built with React, Redux and Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-md h-[200px]">
            <img
              className="w-full h-full object-cover"
              src={ecommerce}
              alt="Ecommerce Website"
            />
            <div className="absolute inset-0 bg-[#5E4B78]/90 opacity-0 group-hover:opacity-100 transition-opactiy duration-300 flex items-center justify-center text-center">
              <p>Ecommerce Website, built with MERN Stack.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
