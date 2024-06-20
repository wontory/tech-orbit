'use client'

import { useAtomValue } from 'jotai'

import { RemoveIconButton } from '@/components/remove-icon-button'
import { selectedIconsAtom } from '@/atoms/selected-icons'
import { icons } from '@/assets/icons'
import type { IconsKeyType } from '@/types/icons'

function SelectedIcons() {
  const selectedIcons = useAtomValue(selectedIconsAtom)

  return (
    <>
      <h2 className="text-xl font-bold">Selected</h2>
      <div className="flex gap-2 overflow-x-auto">
        {selectedIcons.length === 0 ? (
          <p className="py-2 text-center text-muted-foreground">
            No Selected Icons
          </p>
        ) : (
          selectedIcons.map((selectedIcon, index) => (
            <RemoveIconButton
              key={`selected-${index}`}
              index={index}
              icon={icons[selectedIcon.toLowerCase() as IconsKeyType]}
            />
          ))
        )}
      </div>
    </>
  )
}

export { SelectedIcons }
