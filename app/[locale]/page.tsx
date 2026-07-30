import Hero from "@/components/organims/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
export default function HomePage() {

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
