import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@/styles/globals.css'

import { cn } from '@/libs/utils'
import Providers from './providers'

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
      <body className={cn('p-16', GeistSans.variable, GeistMono.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
