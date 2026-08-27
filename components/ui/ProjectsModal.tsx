
import { useTranslations } from 'next-intl';

export default function ProjectsModal() {
  const t = useTranslations('ProjectsModal');

  return (
      <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
              {t('statusBadge')}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-3">
              <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-50">
                {t('title')}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {t('sub')}
              </p>
            </div>
            <div className="md:col-span-6 rounded-xl border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-emerald-400 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                  {t('highlightBoxTitle')}
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t('highlightBoxSub')}
              </p>
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
  );
};