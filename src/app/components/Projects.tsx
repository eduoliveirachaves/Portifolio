import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "React Portifolio Website",
    description: "Project 1 description",
    image: "/images/1.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 2,
    title: "Website",
    description: "Project 2 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 3,
    title: "React",
    description: "Project 3 description",
    image: "/images/3.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 4,
    title: "Portifolio",
    description: "Project 4 description",
    image: "/images/1.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 5,
    title: "React Web",
    description: "Project 5 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
  {
    id: 6,
    title: "React",
    description: "Project 6 description",
    image: "/images/3.png",
    tag: ["All", "Web"],
    git: "/",
    preview: "/",
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.git}
            previewUrl={project.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
