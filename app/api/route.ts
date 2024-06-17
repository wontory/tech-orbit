import { NextRequest, NextResponse } from 'next/server'

import { techOrbit } from '@/assets/tech-orbit'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const size = searchParams.get('size') || '500'
  const duration = searchParams.get('duration') || '20'
  const title = searchParams.get('title') || ''
  const tech = searchParams.get('tech') || ''

  const svg = techOrbit(
    Number(size),
    Number(duration),
    tech.toLowerCase().split(','),
    title,
  )

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  })
}
