import { useTranslations } from "next-intl";
import SectionLayout from "../ui/SectionLayout";
import Image from "next/image";
import { text } from "../ui/styles";
import { PillTag } from "../ui/PillTag";
import SectionTag from "../ui/SectionTag";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  const t = useTranslations('About');
  return (
    <SectionLayout id="about" twoColumn>
      <div>
      <SectionTag text={t('tag')} />
      <SectionTitle title={t('headlineStart')} subtitle={t('headlineEm')} />
      <div className="flex justify-center items-center mb-6 md:w-full">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden">
          <Image 
            src="/images/profile.jpeg" 
            alt="Florencia Scavone" 
            fill
            sizes="(max-width: 768px) 280px, 288px"
            className="object-cover" 
          />  
        </div>
      </div>
      </div>
      <div>
        <p className={text.block}>
          {t('sub')}
        </p>
        <br />
        <p className={text.block}>
          {t('secondSub')}
        </p>
        <div className="pt-4">
          <span className="text-[11px] font-mono text-neutral-400 block mb-3">{t('techStackTitle')}</span>
          <div className="flex flex-wrap gap-2 mb-10">
            {["React", "Next.js", "TypeScript", "Tailwind", "Design Systems", "A/B Testing"].map((skill) => (
              <PillTag key={skill} text={skill} />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}