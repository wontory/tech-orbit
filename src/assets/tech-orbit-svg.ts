import { TechOrbit } from '@/assets/tech-orbit'

function TechOrbitSvg(
  size: number,
  duration: number,
  text: string,
  data: string[],
) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      ${data.map((item, index) => TechOrbit(size, index, duration))}
    </svg>
  `
}

export { TechOrbitSvg }
