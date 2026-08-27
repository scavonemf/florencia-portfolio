import { useTranslations } from "next-intl";
import SectionLayout from "../../ui/SectionLayout";
import { text } from "../../ui/styles";
import SectionTag from "../../ui/SectionTag";
import SectionTitle from "../../ui/SectionTitle";
import { RevealBlock } from "../../ui/RevealBlock/RevealBlock";
import { Skills } from "@/components/ui/Skills/Skills";

export default function About() {
  const t = useTranslations('About');

  return (
    <SectionLayout id="about">
      <RevealBlock>
        <SectionTag text={t('tag')} />
        <SectionTitle title={t('headlineStart')} subtitle={t('headlineEm')} />
      </RevealBlock>
      <RevealBlock delay="100ms">
        <div className="flex flex-row justify-between gap-6 flex-wrap">
          <div className="flex-1">
            <p className={text.block}>{t('sub')}</p>
            <p className={text.block}>{t('secondSub')}</p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className={text.block}>
              {t('thirdSub')}
            </p>
            <p className={text.block}>
              {t('lastSub')}
            </p>
          </div>
        </div>
        <Skills />
      </RevealBlock>
    </SectionLayout>
  );
}