import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MSE - Magna SSK Exim Solutions Pvt Ltd',
  description: 'Premium exporter of spices, oleoresins, and vegetables. Global compliance, quality assurance, and full traceability.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter text-off-white antialiased relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
