'use client'

import { useRef, useState } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import { Input } from '@/components/ui/input'
import { AddIconButton } from '@/components/add-icon-button'
import { icons } from '@/assets/icons'

function SearchIcons() {
  const parentRef = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase())
  }

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
    <>
      <h2 className="text-xl font-bold">Search</h2>
      <Input placeholder="Search Icons" onChange={handleSearch} />
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
    </>
  )
}

export { SearchIcons }
