"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=""> 
        <li>Node.js</li>
        <li>Java</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>Typescript</li>
        <li>Spring Boot</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Sistemas de Informação</li>
        <li>Universidade Federal de Santa Catarina</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white w-full">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image
          src="/images/about-image.png"
          alt="image of about"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            Um pouco sobre mim
          </h2>
          <p className="text-white text-base md:text-lg">
            Me chamo Eduardo, sou estudante de Sistemas de Informação e entusiasta do
            desenvolvimento de software. Tenho experiência com Java e Spring no
            backend, além de JavaScript, TypeScript, React e Node.js no
            desenvolvimento fullstack. Gosto de explorar novas tecnologias e
            aprimorar minhas habilidades, sempre buscando escrever código limpo
            e bem estruturado. Atualmente, estou focado em aprimorar minhas
            habilidades em React e desenvolvimento mobile com React Native.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Tecnologias
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educação
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
