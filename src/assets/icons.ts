import {
  siJavascript,
  siNestjs,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

const Icons = {
  react: siReact,
  'next.js': siNextdotjs,
  nestjs: siNestjs,
  javascript: siJavascript,
  typescript: siTypescript,
  'tailwind css': siTailwindcss,
}

type IconsKeyType = keyof typeof Icons

export { Icons, type IconsKeyType }
