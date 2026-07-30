'use client'

// import { themeInitScript } from '@/lib/theme'

export default function ThemeScript() {
  if (typeof window !== 'undefined') return null

  return (
    <script
      id="theme-init"
      suppressHydrationWarning
      // dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />
  )
}
