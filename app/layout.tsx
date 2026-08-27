import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import ThemeScript from '@/components/layout/ThemeScript'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-[#080808] text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
        <ThemeScript />
        {children}
      </body>
    </html>
  )
}
