import { icons, type IconsKeyType } from '@/assets/icons'

function items(size: number, data: string[], duration: number) {
  return data.map((item, index) => {
    const orbitOrder = Math.floor(index / 2)
    const orbitRadius = 80 + 110 * orbitOrder
    const itemRadius = 30 + 20 * orbitOrder
    const initialAngle = (index % 2) * -180

    const icon = icons[item as IconsKeyType]

    return `
        <style>
        .orbit${index} {
            animation: orbit${index} calc(${duration} * 1s) linear infinite ${orbitOrder % 2 === 0 ? '' : 'reverse'};
        }

        @keyframes orbit${index} {
            from {
            transform: rotate(${initialAngle}deg) translateX(calc(${orbitRadius} * 1px)) rotate(${initialAngle}deg);
            }
            to {
            transform: rotate(${initialAngle + 360}deg) translateX(calc(${orbitRadius} * 1px)) rotate(${initialAngle - 360}deg);
            }
        }
        </style>
        <foreignObject
        x="${(size - itemRadius) / 2}"
        y="${(size - itemRadius) / 2}"
        width="${itemRadius}"
        height="${itemRadius}"
        fill="#${icon.hex}"
        class="orbit${index}"
        >
        ${icon.svg}
        </foreignObject>
    `
  })
}

export { items }
