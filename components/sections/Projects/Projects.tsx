import { useTranslations } from "next-intl";
import SectionLayout from "../../ui/SectionLayout";
import SectionTag from "../../ui/SectionTag";
import SectionTitle from "../../ui/SectionTitle";
import { RevealBlock } from "../../ui/RevealBlock/RevealBlock";
import { text } from "@/components/ui/styles";


export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <SectionLayout id="projects">
      <RevealBlock>
        <SectionTag text={t('tag')} />
        <SectionTitle title={t('headlineStart')} />
      </RevealBlock>
      <RevealBlock delay="100ms">
        <p className={text.block}><strong className="text-neutral-900 dark:text-neutral-50">{t('span1')}</strong></p> 
        <p className={text.block}>{t('span2')}</p>
        <p className={text.block}>{t('span3')}</p> 
        <p className={text.block}>{t('span4')}</p>
      </RevealBlock>
    </SectionLayout>
  );
}