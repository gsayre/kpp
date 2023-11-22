import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KPP',
  description: 'You gotta do your times tables to get your pizza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
