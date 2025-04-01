import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="bg-radial from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          enim? Sint recusandae alias rem et deserunt natus quod dolor cum!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"github.com"}>
            <Image
              src={GitHubIcon}
              alt="GitHub"
              className="h-12 w-12 hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link href={"linkedin.com"}>
            <Image
              src={LinkedinIcon}
              alt="Linkedin"
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
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="sherlock@email.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium ml-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="hi there!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="text-white block text-sm mb-2 font-medium ml-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hello, I am interested in..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2.5 px-5 rounded-lg w-full text-sm transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
