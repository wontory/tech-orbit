import { orbits } from '@/assets/orbits'
import { items } from '@/assets/items'
import { text } from '@/assets/text'

function techOrbit(
  size: number,
  duration: number,
  data: string[],
  title: string,
) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="90%" style="stop-color:rgba(255,255,255,1);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(255,255,255,0);stop-opacity:0" />
        </radialGradient>
      </defs>
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="url(#grad)" />
      ${orbits(size, data.length)}
      ${items(size, data, duration)}
      ${text(title)}
    </svg>
  `
}

export { techOrbit }
