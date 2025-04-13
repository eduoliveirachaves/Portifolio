"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <div className="flex items-center gap-5">
          <Image src="https://identidade.ufsc.br/files/2017/10/brasao_UFSC_vertical_sigla_fundo_escuro.png"
                 alt="UFSC logo" width={40} height={40} className="mb-4" />
          <h3 className="text-lg font-bold mb-2">Universidade Federal de Santa Catarina</h3>
        </div>
        <h4 className="text-md text-gray-400 font-semibold ">2º semestre - Bacharel em Sistemas de Informação </h4>
      </div>
    )
  }
];

const AboutMe = () => {
  const [tab, setTab] = useState("education");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white w-full scroll-mt-20">
      <div className="gap-4 items-center py-8 px-4 xl:gap-16 grid md:grid-cols-1 lg:grid-cols-2 sm:py-16 lg:px-16">
        <div className="w-fit h-fit lg:mb-45 md:mb-10">
          <Image
            src="/images/setup1.png"
            alt="image of about"
            width={800}
            height={800}
            className="rounded-xl border-solid border-2 shadow-2xs shadow-black/30 "
          />
        </div>
        <div className="mt-5 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-center font-bold text-white mb-7">
            Sobre mim
          </h2>
          <div className="grid gap-4 items-center justify-center text-center md:text-left">
            <p className="text-white text-base md:text-lg">
              Olá! Meu nome é Eduardo, sou estudante de Sistemas de Informação e estou dando meus primeiros passos
              profissionais na área de desenvolvimento de software. Desde que entrei no curso, venho explorando
              diferentes
              tecnologias, com foco em desenvolvimento web fullstack.
            </p>
            <p className="text-white text-base md:text-lg">
              Tenho conhecimento em JavaScript, TypeScript, Node.js, PostgreSQL, Java com Spring, HTML, CSS e React.
              Gosto
              de entender como as coisas funcionam por trás do código e busco sempre aplicar boas práticas no que estou
              desenvolvendo, mesmo em projetos pequenos.
            </p>
            <p className="text-white text-base md:text-lg">
              Além do código, também valorizo muito o aprendizado contínuo. Tento estar sempre aprendendo algo novo,
              seja
              uma ferramenta, framework ou apenas uma forma mais eficiente de resolver um problema.
            </p>
            <p className="text-white text-base md:text-lg">
              Criei este portfólio para compartilhar um pouco do que estou construindo e também como forma de me
              conectar
              com o mercado. Estou aberto a oportunidades de estágio, colaboração em projetos e troca de ideias.
            </p>
            <p className="text-white text-base md:text-lg">
              Se quiser conversar ou conhecer melhor meu trabalho, é só me chamar!
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educação
            </TabButton>
          </div>
          <div className="mt-8 min-h-[110px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
