
import { cvData } from "@/data/cvData";
import SectionLayout from "../ui/SectionLayout";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import { text } from "../ui/styles";

export const Skills = () => {
  const { skills } = cvData;
  const t = useTranslations("Skills");
  
  return (
    <SectionLayout id="skills">
      <div>
        <SectionTag text={t('tag')} />
        <SectionTitle title={t('headlineStart')} subtitle={t('headlineEm')} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="space-y-2 mb-6 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
            <h3 className="text-[11px] font-mono text-black dark:text-neutral-400 uppercase tracking-widest">{group.category}</h3>
            <ul>
              {group.items.map((skill) => (
                <li key={skill}  className={text.secondary}>
                  {skill}
                </li>
              ))} 
            </ul>
          </div>
        ))}
      </div>
    </SectionLayout>
  );    
}