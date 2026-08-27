'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useReveal } from '@/lib/useReveal'
import Modal from '@/components/ui/Modal/Modal'
import Projects from '@/components/ui/ProjectsModal'
import SectionLayout from '@/components/ui/SectionLayout'

export default function Hero() {
  const t = useTranslations('Hero')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { ref: revealRef, className: revealClassName } = useReveal<HTMLDivElement>()

  return (
    <SectionLayout className="max-w-3xl mx-auto md:px-10 px-6 py-10 md:py-28 border-b border-neutral-200/60 dark:border-neutral-800">
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Projects />
      </Modal>
      <div className="flex justify-between mt-8 mb-6 md:w-full">
        <div
          ref={revealRef}
          className={`flex flex-col ${revealClassName}`}
        >
           <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-neutral-400 border border-neutral-200/60 dark:border-neutral-800 rounded-full px-3 py-1 w-fit mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
              {t('tag')}
            </span>
          </div>

          <h1 className="text-[clamp(2.1rem,5vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.03em] max-w-2xl mb-6 text-neutral-900 dark:text-neutral-50">
            {t('headlineStart')}{' '}
            <em className="not-italic  text-indigo-400">
              {t('headlineEm')}
            </em>{' '}
          </h1>

          <p className="text-[14px] text-neutral-500 dark:text-neutral-400 max-w-xl leading-[1.75] mb-10">
            {t('sub')}
          </p>

          <div className="flex gap-3 flex-wrap justify-start mb-14">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-[13px] font-medium px-5.5 py-2.25 rounded-lg bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 transition-opacity hover:opacity-85"
            >
              {t('ctaPrimary')}
            </button>
            <a
              href="/FlorenciaScavoneCV.pdf"
              download="FlorenciaScavoneCV.pdf"
              aria-label="Download Florencia Scavone's CV in PDF format"
              className="text-[13px] px-5.5 py-2.25 rounded-lg border border-neutral-200/60 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors inline-block"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 mb-6">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden ring-1 ring-neutral-200/60 dark:ring-neutral-800">
            <Image
              src="/images/profile.jpeg"
              alt="Florencia Scavone"
              fill
                priority
              sizes="(max-width: 768px) 280px, 288px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}