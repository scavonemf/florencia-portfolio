import { useTranslations } from "next-intl";
import SectionLayout from "../../ui/SectionLayout";
import { text } from "../../ui/styles";
import SectionTag from "../../ui/SectionTag";
import SectionTitle from "../../ui/SectionTitle";
import { RevealBlock } from "../../ui/RevealBlock/RevealBlock";


export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <SectionLayout id="projects">
      <RevealBlock>
        <SectionTag text={t('tag')} />
        <SectionTitle title={t('headlineStart')} subtitle={t('headlineEm')} />
         <p className={text.block}>{t('sub')}</p>
      </RevealBlock>
      <RevealBlock delay="100ms">
        <div className="border border-dashed rounded-xl px-8 py-12 text-center text-[14.5px] mt-12 border-indigo-300">
          <span>{t('span1')}</span> 
          <br /> 
          <span>{t('span2')}</span>
        </div>
      </RevealBlock>
    </SectionLayout>
  );
}