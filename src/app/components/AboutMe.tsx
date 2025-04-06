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
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Sistemas de Informação</li>
        <li>Universidade Federal de Santa Catarina</li>
      </ul>
    )
  }
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
    <section id="about" className="text-white w-full ">

      <div className="gap-4 items-center py-8 px-4 xl:gap-16 grid md:grid-cols-1 lg:grid-cols-2 sm:py-16 lg:px-16">
        <div className="w-fit h-fit lg:mb-45 md:mb-10 border-white border">
        <Image
          src="/images/setup1.png"
          alt="image of about"
          width={800}
          height={800}
          className="rounded-xl border-solid border-2 border-gray-700 shadow-2xs shadow-black/30 "
        />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-center font-bold text-white mb-4">
            Sobre mim
          </h2>
          <p className="text-white text-base md:text-lg">
            Olá! Meu nome é Eduardo, sou estudante de Sistemas de Informação e estou dando meus primeiros passos
            profissionais na área de desenvolvimento de software. Desde que entrei no curso, venho explorando diferentes
            tecnologias, com foco em desenvolvimento web fullstack.

            Tenho conhecimento em JavaScript, TypeScript, Node.js, PostgreSQL, Java com Spring, HTML, CSS e React. Gosto
            de entender como as coisas funcionam por trás do código e busco sempre aplicar boas práticas no que estou
            desenvolvendo, mesmo em projetos pequenos.

            Além do código, também valorizo muito o aprendizado contínuo. Tento estar sempre aprendendo algo novo, seja
            uma ferramenta, framework ou apenas uma forma mais eficiente de resolver um problema.

            Criei este portfólio para compartilhar um pouco do que estou construindo e também como forma de me conectar
            com o mercado. Estou aberto a oportunidades de estágio, colaboração em projetos e troca de ideias.

            Se quiser conversar ou conhecer melhor meu trabalho, é só me chamar!
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
          <div className="mt-8 min-h-[160px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
