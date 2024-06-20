'use client'

import { useSetAtom } from 'jotai'

import { Button } from '@/components/ui/button'
import { selectedIconsAtom } from '@/atoms/selected-icons'
import type { IconType } from '@/types/icons'

function RemoveIconButton({ index, icon }: { index: number; icon: IconType }) {
  const setSelectedIcons = useSetAtom(selectedIconsAtom)

  const handleClick = (index: number) => {
    setSelectedIcons((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <Button
      size="icon"
      variant="outline"
      className="shrink-0"
      onClick={() => handleClick(index)}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}"`),
        }}
        className="h-6 w-6"
      />
    </Button>
  )
}

export { RemoveIconButton }
