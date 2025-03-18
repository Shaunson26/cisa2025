import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CISA 2025',
    template: '%s | CISA 2025'
  },
  description: 'The International Conference on Computer Information Systems and Applications',
  metadataBase: new URL('https://cisa2025.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cisa2025.org',
    siteName: 'CISA 2025',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
