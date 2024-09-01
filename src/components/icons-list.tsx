'use client'

import { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import { AddIconButton } from '@/components/add-icon-button'
import { icons } from '@/assets/icons'

function IconsList({ searchValue }: { searchValue: string }) {
  const parentRef = useRef<HTMLDivElement>(null)

  const filteredIcons = Object.entries(icons).filter((icon) =>
    icon[1].title.toLowerCase().includes(searchValue),
  )

  const rowVirtualizer = useVirtualizer({
    count: filteredIcons.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 66,
    gap: 16,
  })

  return (
    <div
      className="max-h-[calc(100dvh-512px)] min-h-96 overflow-auto"
      ref={parentRef}
    >
      <div
        className="relative w-full"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            className="absolute left-0 top-0 w-full"
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <AddIconButton icon={filteredIcons[virtualRow.index][1]} />
          </div>
        ))}
      </div>
    </div>
  )
}

export { IconsList }
