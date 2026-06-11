import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('hero')

  return (
    <main className="min-h-screen bg-white">
      <p className="p-8 text-sm text-gray-400 uppercase tracking-widest">
        {t('tag')}
      </p>
      <h1 className="px-8 text-5xl font-medium tracking-tight">
        {t('headline')}
      </h1>
    </main>
  )
}