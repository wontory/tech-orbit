import fs from 'fs'
import * as simpleIcons from 'simple-icons'

const iconsObject = {}

Object.keys(simpleIcons).forEach((key) => {
  const icon = simpleIcons[key]

  iconsObject[icon.title.toLowerCase()] = {
    title: icon.title,
    svg: icon.svg,
    hex: icon.hex,
  }
})

const iconsJson = JSON.stringify(iconsObject)

fs.writeFileSync(
  './src/assets/icons.ts',
  `const icons = ${iconsJson}; export { icons };`,
)

console.log('Icons data has been generated and saved to iconsData.json')
