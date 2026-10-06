import Hero from "@/components/modules/Hero/Hero";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Experience from "@/components/sections/Experience/Experience";
import Projects from "@/components/sections/Projects/Projects";

export default function HomePage() {

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
