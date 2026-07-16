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
  // Optimized for exact search intents: "Best Homestay in Panchari, Udhampur"
  title: 'Duggar Den | Best Homestay & Cafe in Panchari, Udhampur',
  description:
    'Experience authentic Dogra hospitality at Duggar Den — the premier mountain homestay and cafe in Panchari, Udhampur (Jammu & Kashmir). Book a cozy cabin stay among the pines.',
  generator: 'v0.app',
  keywords: [
    'homestay in Panchari',
    'best homestay in Panchari',
    'cafe in Panchari',
    'Panchari Udhampur homestay',
    'stay in Panchari',
    'Duggar Den',
    'homestay near Patnitop',
    'homestay in Udhampur',
    'Jammu and Kashmir rural tourism',
    'Dogra hospitality',
    'mountain stay Jammu',
    'cozy cabins Panchari',
    'Duggar village tourism',
  ],
  authors: [{ name: 'Duggar Den Team' }],
  metadataBase: new URL('https://duggargarden.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Duggar Den | Best Homestay & Cafe in Panchari, Udhampur',
    description:
      'Experience authentic Dogra hospitality at Duggar Den — the premier mountain homestay and cafe in Panchari, Udhampur (Jammu & Kashmir). Book a cozy cabin stay among the pines.',
    url: 'https://duggargarden.com',
    siteName: 'Duggar Den',
    images: [
      {
        url: '/images/hero-cabin.png',
        width: 1200,
        height: 630,
        alt: 'Duggar Den homestay cabin among the pines in Panchari',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duggar Den | Best Homestay & Cafe in Panchari, Udhampur',
    description:
      'Experience authentic Dogra hospitality at Duggar Den — the premier mountain homestay and cafe in Panchari, Udhampur. Book your cabin among the pines.',
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
  // Enhanced Schema structure: Adding standard property definitions
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BedAndBreakfast',
    'name': 'Duggar Den',
    'image': 'https://duggargarden.com/images/hero-cabin.png',
    '@id': 'https://duggargarden.com/#identity',
    'url': 'https://duggargarden.com',
    'telephone': '+917051391976',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Panchari, Meer, Sankari',
      'addressLocality': 'Panchari',
      'addressRegion': 'Udhampur, Jammu and Kashmir',
      'postalCode': '182125',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '33.0645',
      'longitude': '75.2014',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '35', // Dynamic or placeholder to explicitly flag ratings in search results
    },
    'amenityFeature': [
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'In-house Cafe',
        'value': true
      },
      {
        '@type': 'LocationFeatureSpecification',
        'name': 'Mountain View',
        'value': true
      }
    ]
  }

  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          id="json-ld-schema"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
