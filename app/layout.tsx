import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Duggar Den — Home Stay & Cafe | Panchari, Kashmir',
  description:
    'Zip, Sip & Stay at Duggar Den — a cozy mountain homestay and cafe in Panchari, Jammu and Kashmir. Book your stay among the pines.',
  generator: 'v0.app',
  keywords: [
    'Duggar Den',
    'homestay in Panchari',
    'cafe in Panchari',
    'Panchari Udhampur homestay',
    'Jammu and Kashmir rural tourism',
    'Dogra hospitality',
    'mountain stay Kashmir',
    'cozy cabins Panchari',
    'Duggar village tourism',
    'Udhampur homestays',
  ],
  authors: [{ name: 'Duggar Den Team' }],
  metadataBase: new URL('https://duggargarden.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Duggar Den — Home Stay & Cafe | Panchari, Kashmir',
    description:
      'Zip, Sip & Stay at Duggar Den — a cozy mountain homestay and cafe in Panchari, Jammu and Kashmir. Book your stay among the pines.',
    url: 'https://duggargarden.com',
    siteName: 'Duggar Den',
    images: [
      {
        url: '/images/hero-cabin.png',
        width: 1200,
        height: 630,
        alt: 'Duggar Den homestay cabin among the pines',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duggar Den — Home Stay & Cafe | Panchari, Kashmir',
    description:
      'Zip, Sip & Stay at Duggar Den — a cozy mountain homestay and cafe in Panchari, Jammu and Kashmir. Book your stay among the pines.',
    images: ['/images/hero-cabin.png'],
  },
  icons: {
    icon: '/images/duggar-den-logo.jpg',
    shortcut: '/images/duggar-den-logo.jpg',
    apple: '/images/duggar-den-logo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BedAndBreakfast',
    'name': 'Duggar Den',
    'image': 'https://duggargarden.com/images/duggar-den-logo.jpg',
    '@id': 'https://duggargarden.com',
    'url': 'https://duggargarden.com',
    'telephone': '+917051391976',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Panchari, Meer, Sankari',
      'addressLocality': 'Udhampur',
      'addressRegion': 'Jammu and Kashmir',
      'postalCode': '182125',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '33.0645',
      'longitude': '75.2014',
    },
    'starRating': {
      '@type': 'Rating',
      'ratingValue': '4.9',
    },
    'priceRange': '$$',
  }

  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
