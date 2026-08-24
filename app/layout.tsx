import type { Metadata, Viewport } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'HR Dashboard — Attrition Risk Predictor',
  description:
    'HR dashboard with live KPIs, department and location slicers, and an interactive employee attrition risk predictor.',
}

export const viewport: Viewport = {
  themeColor: '#10152B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#10152B', color: '#F1F3FA' }}>{children}</body>
    </html>
  )
}
