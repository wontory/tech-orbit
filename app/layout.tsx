import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@/styles/globals.css'

import { cn } from '@/libs/utils'

export const metadata: Metadata = {
  title: 'tech-orbit',
  description: 'Show off your tech stack in style with tech-orbit!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, GeistMono.variable)}>
        {children}
      </body>
    </html>
  )
}
