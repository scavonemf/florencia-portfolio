import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 px-6 md:px-10 py-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 max-w-7xl mx-auto">
        <span className="text-[12px] text-neutral-500">{t('copyright')}</span>

        <nav className="flex gap-6" aria-label="Footer navigation">
          <a
            href="https://linkedin.com/in/florencia-scavone-719b74152/"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {t('linkedin')}
          </a>
          <a
            href="https://github.com/scavonemf"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {t('github')}
          </a>
          <a
            href="/FlorenciaScavoneCV.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {t('downloadCV')}
          </a>
          <a
            href="mailto:scavone.mf@gmail.com"
            className="text-[12px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {t('email')}
          </a>
        </nav>

        <div className="hidden md:flex justify-end">
          <a
            href="#top"
            className="text-[12px] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all hover:-translate-y-0.5 inline-flex items-center gap-1"
          >
            {t('backToTop')}
          </a>
        </div>
      </div>
    </footer>
  );
}