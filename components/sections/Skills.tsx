
import { cvData } from "@/data/cvData";
import SectionLayout from "../ui/SectionLayout";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";

export const Skills = () => {
  const { skills } = cvData;
  const t = useTranslations("Skills");
  
  return (
    <SectionLayout id="skills" twoColumn>
      <div>
        <SectionTag text={t('tag')} />
        <SectionTitle title={t('headlineStart')} subtitle={t('headlineEm')} />
      </div>
      <div>
        {skills.map((group) => (
          <div key={group.category} className="space-y-2 mb-6">
            <h3 className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="text-xs px-3 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 font-medium">
                  {skill}
                </span>
              ))} 
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );    
}