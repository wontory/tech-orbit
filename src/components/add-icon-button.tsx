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
      className="size-full justify-normal gap-8 text-wrap p-4 px-6"
      onClick={handleClick}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}"`),
        }}
        className="size-8"
      />
      <span className="text-base">{icon.title}</span>
    </Button>
  )
}

export { AddIconButton }
