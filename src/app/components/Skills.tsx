"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    href: "https://www.java.com/",
    alt: "Java logo",
    src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    width: 120,
    height: 50
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "JavaScript logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    width: 155,
    height: 64
  },
  {
    href: "https://www.typescriptlang.org/",
    alt: "TypeScript logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
    width: 155,
    height: 64
  },
  {
    href: "https://nodejs.org/",
    alt: "Node.js logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    width: 168,
    height: 64
  },
  {
    href: "https://spring.io/",
    alt: "Spring logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png",
    width: 188,
    height: 100
  },
  {
    href: "https://react.dev/",
    alt: "React logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    width: 168,
    height: 64
  },
  {
    href: "https://tailwindcss.com/",
    alt: "Tailwind CSS logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    width: 168,
    height: 64
  },
  {
    href: "https://www.postgresql.org/",
    alt: "PostgreSQL logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    width: 160,
    height: 64
  },
  {
    href: "https://www.prisma.io/",
    alt: "Prisma logo",
    src: "https://prismalens.vercel.app/header/logo-white.svg",
    width: 168,
    height: 64
  },
  {
    href: "https://expressjs.com/",
    alt: "Express.js logo",
    src: "/images/icons8-express-js-50.png",
    width: 120,
    height: 64
  },
  {
    href: "https://vitejs.dev/",
    alt: "Vite logo",
    src: "https://vitejs.dev/logo.svg",
    width: 145,
    height: 64
  },
  {
    href: "https://swagger.io/",
    alt: "Swagger logo",
    src: "https://static-00.iconduck.com/assets.00/swagger-icon-2048x2048-563qbzey.png",
    width: 145,
    height: 64
  },
  {
    href: "https://ubuntu.com/",
    alt: "Ubuntu logo",
    src: "https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png",
    width: 145,
    height: 64
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    alt: "HTML5 logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    width: 190,
    height: 200
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    alt: "CSS3 logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    width: 140,
    height: 55
  }
].reverse();

const carrosel = logos.concat(logos).concat(logos).concat(logos).concat(logos);


const Skills = () => {

  return (
    <section
      className="overflow-hidden w-full mb-15">
      <motion.div
        className="flex gap-12 items-center justify-center"
        animate={{ x: ["-95%", "0"] }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ display: "flex", width: "fit-content" }}
      >
        {carrosel.map((skill, n) => (
          <div
            key={n}
            style={{ minWidth: `${skill.width}px` }}
            className="flex-shrink-0"
          >
            <a target="_blank" href={skill.href} rel="noopener">
              <Image
                alt={skill.alt}
                width={skill.width - 35}
                height={skill.height}
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={skill.src}
              />
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;