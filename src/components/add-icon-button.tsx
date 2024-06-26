'use client'

import { useSetAtom } from 'jotai'

import { Button } from '@/components/ui/button'
import { selectedIconsAtom } from '@/atoms/selected-icons'
import type { IconType } from '@/types/icons'

function AddIconButton({ icon }: { icon: IconType }) {
  const setSelectedIcons = useSetAtom(selectedIconsAtom)

  const handleClick = () => setSelectedIcons((prev) => [...prev, icon.title])

  return (
    <Button
      variant="outline"
      className="flex aspect-square h-full w-full flex-col gap-4 text-wrap"
      onClick={handleClick}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}"`),
        }}
        className="h-16 w-16"
      />
      <span className="text-xs">{icon.title}</span>
    </Button>
  )
}

export { AddIconButton }
