import { orbits } from '@/assets/orbits'
import { items } from '@/assets/items'
import { text } from '@/assets/text'

function TechOrbit(
  size: number,
  duration: number,
  data: string[],
  title: string,
) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      ${orbits(size, data.length)}
      ${items(size, data, duration)}
      ${text(title)}
    </svg>
  `
}

export { TechOrbit }
