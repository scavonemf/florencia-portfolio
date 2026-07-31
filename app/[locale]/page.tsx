import Hero from "@/components/organims/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { Skills } from "@/components/sections/Skills";
export default function HomePage() {

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
