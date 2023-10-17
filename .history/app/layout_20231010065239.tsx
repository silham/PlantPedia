import './globals.css'
import 'remixicon/fonts/remixicon.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plantpedia',
  description: 'Growing knowledge, harvesting success with Agro Finder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
