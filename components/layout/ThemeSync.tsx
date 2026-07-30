'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { applyTheme } from '@/lib/theme'

export default function ThemeSync({ locale }: { locale: string }) {
  const pathname = usePathname()

  useLayoutEffect(() => {
    applyTheme()
    document.documentElement.lang = locale
  }, [pathname, locale])

  return null
}
