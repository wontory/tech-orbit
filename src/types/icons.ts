import { icons } from '@/assets/icons'

type IconsKeyType = keyof typeof icons

type IconType = {
  title: string
  svg: string
  hex: string
}

export type { IconType, IconsKeyType }
