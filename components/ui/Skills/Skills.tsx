import { cvData } from "@/data/cvData";

import { text } from "../styles";
import { RevealBlock } from "../RevealBlock/RevealBlock";

export const Skills = () => {
  const { skills } = cvData;

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {skills.map((group, i) => (
          <RevealBlock key={group.category} delay={`${i * 80}ms`}>
            <div className="space-y-2 mb-6 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-800 hover:-translate-y-0.5">
              <h3 className="text-[11px] font-mono not-italic text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                {group.category}
              </h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill} className={text.secondary}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </RevealBlock>
        ))}
      </div>
  );
}


