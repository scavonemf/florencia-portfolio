import { Inter } from 'next/font/google'
import ThemeScript from '@/components/layout/ThemeScript'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeScript />
        {children}
      </body>
    </html>
  )
}
