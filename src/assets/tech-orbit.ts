import { orbits } from '@/assets/orbits'
import { items } from '@/assets/items'
import { Text } from '@/assets/text'

function TechOrbit(
  size: number,
  duration: number,
  text: string,
  data: string[],
) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      ${orbits(size, data.length)}
      ${items(size, data, duration)}
      ${text && Text(text)}
    </svg>
  `
}

export { TechOrbit }
