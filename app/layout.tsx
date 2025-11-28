import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/ThemeProvider'

export const metadata: Metadata = {
  title: 'Synergy Hub - CRM Dashboard',
  description: 'Modern CRM dashboard for managing campaigns, clients, and social media',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{
      '--font-outfit': 'ui-sans-serif, system-ui, sans-serif',
      '--font-dm-sans': 'ui-sans-serif, system-ui, sans-serif',
      '--font-space-mono': 'ui-monospace, monospace'
    } as React.CSSProperties}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=DM+Sans:wght@400;500&family=Space+Mono:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <div className="gradient-mesh" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
