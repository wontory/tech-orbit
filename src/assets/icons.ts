import {
  siJavascript,
  siNestjs,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

type IconsKeyType = keyof typeof icons

const icons = {
  react: siReact,
  'next.js': siNextdotjs,
  nestjs: siNestjs,
  javascript: siJavascript,
  typescript: siTypescript,
  'tailwind css': siTailwindcss,
}

export { type IconsKeyType, icons }
