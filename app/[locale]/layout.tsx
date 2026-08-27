import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import Nav from '@/components/organims/Nav/Nav'
import ThemeSync from '@/components/layout/ThemeSync'
import Footer from '@/components/organims/Footer/Footer'

export const metadata: Metadata = {
  title: 'Florencia Scavone — Frontend Engineer',
  description: 'Frontend Engineer building accessible, high-performance interfaces with React, Next.js and TypeScript.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeSync locale={locale} />
      <Nav locale={locale} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  )
}