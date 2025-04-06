import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative"
    >
      <div className="bg-radial from-blue-900 to-transparent rounded-full  h-80 w-80 lg:h-90 lg:w-90 sm:h-70 sm:w-70 z-0 blur-lg absolute sm:top-7/8 lg:top-6/10 transform -translate-x-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">
          Conecte-se comigo
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-1xl">
          Adoro conversar sobre tecnologia e compartilhar ideias. Me chama lá!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/eduoliveirachaves"}>
            <Image
              src={GitHubIcon}
              alt="GitHub icon"
              className="h-12 w-12 hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link href={"https://linkedin.com/in/eduardo-eoc"}>
            <Image
              src={LinkedinIcon}
              alt="Linkedin icon"
              className="h-12 w-12 hover:scale-110 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2 ml-1"
            >
              Seu email
            </label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@email.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium ml-1"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Trabalho"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="text-white block text-sm mb-2 font-medium ml-1"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Olá, estou interessado em..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-tertiary hover:bg-blue-900 text-white font-semibold py-2.5 px-5 rounded-lg w-full text-sm transition-all duration-300"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
