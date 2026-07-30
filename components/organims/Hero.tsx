'use client'

import { useState, useSyncExternalStore } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { getIsDark, subscribeTheme } from '@/lib/theme'
import Modal from '@/components/ui/Modal'
import Projects from '@/components/sections/Projects' 

export default function Hero() {
  const t = useTranslations('Hero')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isDarkMode = useSyncExternalStore(subscribeTheme, getIsDark, () => false)

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-[1fr_400px] max-w-5xl mx-auto md:px-10 px-6 py-8 border-b border-neutral-200/60 dark:border-neutral-800  background-color:lab(98 0.02 0)">
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
<Projects />
     </Modal>
      <div className="flex flex-col justify-center">
        <span className="inline-block text-[11px] tracking-widest uppercase text-neutral-400 border border-neutral-200/60 dark:border-neutral-800 rounded-full px-3 py-1 w-fit mb-8">
          {t('tag')}
        </span>
        <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.06] tracking-[-0.03em] max-w-130 mb-6 text-neutral-900 dark:text-neutral-50">
          {t('headlineStart')}{' '}
          <em className="italic text-neutral-400">{t('headlineEm')}</em>{' '}
          {t('headlineEnd')}
        </h1>
        <p className="text-[14px] text-neutral-500 dark:text-neutral-400 max-w-100 leading-[1.75] mb-10">
          {t('sub')}
        </p>
      
        <div className="flex gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="text-[13px] font-medium px-5.5 py-2.25 rounded-lg bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 transition-opacity hover:opacity-85"
          >
            {t('ctaPrimary')}
          </button>
          <a 
            href="/Florencia_Scavone_CV_Senior_Frontend.docx" 
            download="Florencia_Scavone_CV_Senior_Frontend.docx"
            aria-label="Download Florencia Scavone's CV in PDF format"
            className="text-[13px] px-5.5 py-2.25 rounded-lg border border-neutral-200/60 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors inline-block"
          >
            {t('ctaSecondary')}
          </a>  
        </div>
      </div>
      <div className="relative w-full aspect-square items-center justify-center mx-auto hidden md:flex">
        <div className="relative w-[90%] max-w-105 aspect-square rounded-full overflow-hidden bg-white dark:bg-[#080808] transition-colors duration-300">
          <Image 
            src="/images/keyboard-illustration.gif"
            alt="Coding Micro-interactions Illustration"
            fill
            priority
            sizes="(max-w-768px) 100vw, 400px"
            className={`object-cover transition-all duration-300 ease-in-out transform-gpu ${isDarkMode ? 'filter invert' : 'grayscale brightness-105 contrast-115'}`}
          />
        </div>
      </div>
    </section>
  )
}