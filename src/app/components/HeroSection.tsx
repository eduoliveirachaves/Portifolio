"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="lg:py-16 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-4 lg:gap-0 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-9 place-self-center text-center sm:text-left lg:justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Prazer, sou
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Edu",
                1500,
                "Estudante",
                1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl w-full lg:w-fit">
            Desenvolvedor em formação, apaixonado por tecnologia e sempre em
            busca de novos desafios.
          </p>
          <div>
            <button
              onClick={() => router.push("#contact")}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary via-tertiary to-secondary text-white"
            >
              Me contrate
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-tertiary to-secondary hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Baixar CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-3 place-self-center mt-4 lg:mt-0 ml-23 lg:-ml-30"
        >
          <div className="rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] relative">
            <Image
              src="/images/noback.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
