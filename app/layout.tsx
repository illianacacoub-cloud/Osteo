import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

import { DOCTOLIB_URL, PHONE_DISPLAY, SITE_URL } from '@/lib/content'

const title = 'Illiana Cacoub — Ostéopathe D.O. à Paris 3'
const description =
  'Ostéopathe D.O. à Paris 3. Prise en charge globale pour soulager vos tensions et retrouver une mobilité durable. Adultes, nourrissons & enfants, grossesse, drainage. 45 min, 80€.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | Illiana Cacoub',
  },
  description,
  applicationName: 'Illiana Cacoub — Ostéopathe',
  authors: [{ name: 'Illiana Cacoub' }],
  creator: 'Illiana Cacoub',
  keywords: [
    'ostéopathe Paris 3',
    'ostéopathe Paris',
    'ostéopathie',
    'ostéopathe nourrisson',
    'ostéopathe grossesse',
    'drainage lymphatique Paris',
    'rue de Turbigo',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Illiana Cacoub — Ostéopathe D.O.',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: true, address: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a161a',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Illiana Cacoub — Ostéopathe D.O.',
  description,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  telephone: PHONE_DISPLAY,
  priceRange: '80€',
  medicalSpecialty: 'Osteopathic',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '41 rue de Turbigo',
    postalCode: '75003',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  areaServed: { '@type': 'City', name: 'Paris' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '10' },
  potentialAction: {
    '@type': 'ReserveAction',
    target: { '@type': 'EntryPoint', urlTemplate: DOCTOLIB_URL },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="8d353d98-7f24-4b50-83ff-d55b56b907d9"
          strategy="afterInteractive"
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
