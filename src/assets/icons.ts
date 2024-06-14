import {
  siJavascript,
  siNestjs,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

const icons = {
  react: siReact,
  'next.js': siNextdotjs,
  nestjs: siNestjs,
  javascript: siJavascript,
  typescript: siTypescript,
  'tailwind css': siTailwindcss,
}

type IconsKeyType = keyof typeof icons

export { icons, type IconsKeyType }
