import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hack Club Butwal - Community Hub',
  description:
      'The official community hub for Hack Club Butwal. Find events, workshops, and connect with fellow coders in Butwal. Powered by Next.js, Tailwind CSS, and Airtable.',
  generator: 'Hack Club Butwal Site',
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
