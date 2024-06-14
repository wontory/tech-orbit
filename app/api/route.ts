import { NextRequest, NextResponse } from 'next/server'

import { TechOrbitSvg } from '@/assets/tech-orbit-svg'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const size = searchParams.get('size') || '1000'
  const duration = searchParams.get('duration') || '20'
  const text = searchParams.get('text') || ''
  const tech = searchParams.get('tech') || ''

  const svg = TechOrbitSvg(
    Number(size),
    Number(duration),
    text,
    tech.toLowerCase().split(','),
  )

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  })
}
