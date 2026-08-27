import Hero from "@/components/organims/Hero/Hero";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Projects from "@/components/sections/Projects/Projects";

export default function HomePage() {

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
