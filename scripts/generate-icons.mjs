import fs from 'fs'
import * as simpleIcons from 'simple-icons'

const iconsObject = {}

Object.keys(simpleIcons).forEach((key) => {
  const icon = simpleIcons[key]

  iconsObject[icon.title.toLowerCase()] = {
    svg: icon.svg,
    hex: icon.hex,
  }
})

const iconsJson = JSON.stringify(iconsObject, null, 2)

fs.writeFileSync(
  './src/assets/icons.ts',
  `
type IconsKeyType = keyof typeof icons

const icons = ${iconsJson}

export { type IconsKeyType, icons }
`,
)

console.log('Icons data has been generated and saved to iconsData.json')
