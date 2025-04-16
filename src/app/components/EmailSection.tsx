"use client";

import { useState } from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [errors, setErrors] = useState<{
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const dataObject = Object.fromEntries(formData.entries());

    const data = {
      subject: dataObject.subject as string,
      message: dataObject.message as string,
      emailSender: dataObject.email as string,
    };

    const newErrors: { email?: string; subject?: string; message?: string } =
      {};
    if (!data.emailSender) newErrors.email = "O campo de email é obrigatório.";
    if (!data.subject) newErrors.subject = "O campo de assunto é obrigatório.";
    if (!data.message) newErrors.message = "O campo de mensagem é obrigatório.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); 
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Clear form fields
        (form.elements.namedItem("subject") as HTMLInputElement).value = "";
        (form.elements.namedItem("message") as HTMLTextAreaElement).value = "";
        (form.elements.namedItem("email") as HTMLInputElement).value = "";
      } else {
        const errorData = await response.json();
        console.error("Erro ao enviar a mensagem:", errorData);
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative"
    >
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
        <form className="flex flex-col" onSubmit={submitForm}>
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
              name="email"
              placeholder="seuemail@email.com"
              className={`bg-[#18191E] border ${
                errors.email ? "border-red-500" : "border-[#33353F]"
              } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium ml-1"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Trabalho"
              className={`bg-[#18191E] border ${
                errors.subject ? "border-red-500" : "border-[#33353F]"
              } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium ml-1"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Olá, estou interessado em..."
              className={`bg-[#18191E] border ${
                errors.message ? "border-red-500" : "border-[#33353F]"
              } placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-tertiary hover:bg-blue-900 text-white font-semibold py-2.5 px-5 rounded-lg w-full text-sm transition-all duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
