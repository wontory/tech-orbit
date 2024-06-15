import {
  siAstro,
  siFramer,
  siJavascript,
  siNestjs,
  siNextdotjs,
  siReact,
  siShadcnui,
  siSimpleicons,
  siSvg,
  siTailwindcss,
  siTypescript,
  siVercel,
} from 'simple-icons'

type IconsKeyType = keyof typeof icons

const icons = {
  react: siReact,
  'next.js': siNextdotjs,
  nestjs: siNestjs,
  javascript: siJavascript,
  typescript: siTypescript,
  'tailwind css': siTailwindcss,
  astro: siAstro,
  vercel: siVercel,
  'shadcn-ui': siShadcnui,
  framer: siFramer,
  'simple icons': siSimpleicons,
  svg: siSvg,
}

export { type IconsKeyType, icons }
