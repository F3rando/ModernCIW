import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Corona Custom Iron Works',
  description: 'Family-founded, family-owned and operated since 1999. Crafting gates, doors, and metalwork built to last.',
  icons: {
    icon: [
      { url: '/logo_corona.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo_corona.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Corona Custom Iron Works',
    description: 'Family-founded, family-owned and operated since 1999. Crafting gates, doors, and metalwork built to last.',
    images: [
      {
        url: '/logo_corona2.png',
        width: 1200,
        height: 630,
        alt: 'Corona Custom Iron Works Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corona Custom Iron Works',
    description: 'Family-founded, family-owned and operated since 1999. Crafting gates, doors, and metalwork built to last.',
    images: ['/logo_corona2.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
