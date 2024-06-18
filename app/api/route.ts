import { NextRequest, NextResponse } from 'next/server'

import { techOrbit } from '@/assets/tech-orbit'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') || ''
  const tech = searchParams.get('tech') || ''
  const size = searchParams.get('size') || '500'
  const duration = searchParams.get('duration') || '20'

  const svg = techOrbit(
    Number(size),
    Number(duration),
    tech
      .toLowerCase()
      .split(',')
      .filter((item) => item !== ''),
    title,
  )

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  })
}
