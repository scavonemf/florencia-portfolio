import { cvData } from '@/data/cvData';
import SectionTitle from '../ui/SectionTitle';
import SectionTag from '../ui/SectionTag';
import SectionLayout from '../ui/SectionLayout';
import { useTranslations } from 'next-intl';

export const Education = () => {
  const { education } = cvData;
  const t = useTranslations("Education");

  return (
    <SectionLayout id="education" twoColumn>
      <div className="flex flex-col justify-center">
        <SectionTag text={t('tag')} />
        <SectionTitle title={t('headlineStart')} subtitle={t('headlineEm')} />
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div key={edu.academy} className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 block mb-1">{edu.year}</span>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{edu.academy}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{edu.title}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}