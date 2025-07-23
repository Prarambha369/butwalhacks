import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'HackClub Butwal',
    description: 'HackClub Butwal is the central hub for the Butwal coding community, featuring events, workshops, resources, and interactive content powered by Airtable.',
    generator: 'Next.js App Router & Tailwind CSS',
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
