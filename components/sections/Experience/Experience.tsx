import { useTranslations } from "next-intl";
import SectionLayout from "../../ui/SectionLayout";
import SectionTag from "../../ui/SectionTag";
import SectionTitle from "../../ui/SectionTitle";
import { RevealBlock } from "../../ui/RevealBlock/RevealBlock";
import { text } from "../../ui/styles";

export default function Experience() {
  const t = useTranslations('Experience');

  const achievements = [
    t('bullet1'),
    t('bullet2'),
    t('bullet3'),
    t('bullet4'),
    t('bullet5'),
    t('bullet6'),
  ];

  return (
    <SectionLayout id="experience">
      <RevealBlock>
        <SectionTag text={t('tag')} />
        <SectionTitle title={t('headlineStart')} />
      </RevealBlock>
      
      <RevealBlock delay="100ms">
        <div className="mt-8 space-y-8">
          <div className="flex flex-row justify-between gap-6 flex-wrap">
            <div className="flex-1">
              <h3 className={text.block}> <strong className="text-neutral-900 dark:text-neutral-50">{t('role')}</strong> <span>@ {t('company')}</span> <p >{t('period')}</p></h3>
              <ul>
                {achievements.map((bullet, index) => (
                  <li key={index} className="flex flex-row gap-2 items-start mt-2">
                    <span>•</span>{" "}
                    <p className={text.block}>{bullet}</p>
                  </li>
                ))}
              </ul>
                 <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.cookunity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-950 text-sm font-medium hover:bg-white transition-colors group"
                >
                  {t('ctaPrimary')}
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealBlock>
    </SectionLayout>
  );
}