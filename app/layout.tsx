import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LimoLift Development | Turn Idle Vehicles Into Nonstop Revenue in 10 Days',
  description: 'Discover how the LimoLift Elite Site transforms your limo business in just 10 days—boost bookings, slash costs, and dominate your market.',
  keywords: 'limo website development, luxury transportation websites, limo booking sites, executive transport web design',
  authors: [{ name: 'LimoLift Development' }],
  openGraph: {
    title: 'LimoLift Development | Premium Limo Website Development',
    description: 'Transform your limo business with a premium website that generates nonstop revenue in just 10 days.',
    url: 'https://limoliftdevelopment.com',
    siteName: 'LimoLift Development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LimoLift Development | Premium Limo Website Development',
    description: 'Transform your limo business with a premium website that generates nonstop revenue in just 10 days.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Google Ads Conversion Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', 'AW-CONVERSION_ID');
            `,
          }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Calendly Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('message', function(e) {
                if (e.data.type === 'calendly.event_scheduled') {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-CONVERSION_ID/calendly_booking_conversion',
                      'value': 200.0,
                      'currency': 'USD',
                      'transaction_id': Date.now()
                    });
                  }
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
