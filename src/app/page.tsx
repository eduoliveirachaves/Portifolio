import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-14 py-4">
          <HeroSection />
          <AboutMe />
          <Skills />
          <Projects />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
