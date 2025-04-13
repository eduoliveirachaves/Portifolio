"use client";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Usando Java, React, Spring Boot, PostgreSQL, Docker, Tailwind CSS",
    image: "/images/3.png",
    tag: ["Todos"],
    git: "https://github.com/eduoliveirachaves/E-commerce.back"
  }, {
    id: 7,
    title: "E-commerce Backend",
    description: "Usando Java, Spring Boot, PostgreSQL, Docker",
    image: "/images/3.png",
    tag: ["Backend"],
    git: "https://github.com/eduoliveirachaves/E-commerce.back"
  }, {
    id: 8,
    title: "E-commerce Frontend",
    description: "Usando React, Typescript, Tailwind CSS, ViteJS",
    image: "/images/3.png",
    tag: ["Frontend"],
    git: "https://github.com/eduoliveirachaves/E-commerce.front"
  },
  {
    id: 2,
    title: "Planner App",
    description: "Usando Java, Typescript, React, Spring Boot, PostgreSQL",
    image: "/images/planner.webp",
    tag: ["Todos"],
    git: "https://github.com/eduoliveirachaves/PlannerFront"
  }, {
    id: 9,
    title: "Planner Backend",
    description: "Usando Java, Spring Boot, MongoDB",
    image: "/images/planner.webp",
    tag: ["Backend"],
    git: "https://github.com/eduoliveirachaves/Planner"
  }, {
    id: 10,
    title: "Planner Frontend",
    description: "Usando Typescript, React",
    image: "/images/planner.webp",
    tag: ["Frontend"],
    git: "https://github.com/eduoliveirachaves/PlannerFront"
  },
  {
    id: 3,
    title: "Present.ly",
    description: "Usando Typescript, React, Node.js, PostgreSQL, Express",
    image: "/images/present.png",
    tag: ["Todos"],
    git: "https://github.com/eduoliveirachaves/present.ly.back"
  }, {
    id: 11,
    title: "Present.ly Backend",
    description: "Usando Node.js, PostgreSQL, Express, Sequelize",
    image: "/images/present.png",
    tag: ["Backend"],
    git: "https://github.com/eduoliveirachaves/present.ly.back"
  },
  {
    id: 4,
    title: "Jogo Termo (Wordle)",
    description: "Termo é um jogo de palavras, onde o usuario tem que adivinhar a palavra correta em 6 tentativas",
    image: "/images/wordle.png",
    tag: ["Todos", "Frontend"],
    git: "https://github.com/eduoliveirachaves/word-game"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <div id="projects" ref={ref} className="lg:scroll-mt-27 sm:scroll-mt-70">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="Todos"
          onClick={handleTagChange}
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          name="Backend"
          onClick={handleTagChange}
          isSelected={tag == "Backend"}
        />
        <ProjectTag
          name="Frontend"
          onClick={handleTagChange}
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3 sm:grid-cols-1">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.7, delay: 0.2 + 0.25 * index }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.git}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
