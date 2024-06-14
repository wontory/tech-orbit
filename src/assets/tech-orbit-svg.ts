import { Text } from '@/assets/text'
import { TechOrbit } from '@/assets/tech-orbit'
import { Icons, type IconsKeyType } from '@/assets/icons'

function TechOrbitSvg(
  size: number,
  duration: number,
  text: string,
  data: string[],
) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      ${text && Text(text)}
      ${data.map((item, index) => TechOrbit(Icons[item as IconsKeyType], size, index, duration))}
    </svg>
  `
}

export { TechOrbitSvg }
