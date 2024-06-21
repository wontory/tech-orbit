'use client'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AddIconButton } from '@/components/add-icon-button'
import { icons } from '@/assets/icons'

function SearchIcons() {
  const [searchValue, setSearchValue] = useState('')

  const filteredIcons = Object.entries(icons).filter((icon) =>
    icon[1].title.toLowerCase().includes(searchValue),
  )

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase())
  }

  return (
    <>
      <h2 className="text-xl font-bold">Search</h2>
      <Input placeholder="Search Icons" onChange={handleSearch} />
      <ScrollArea className="flex max-h-[calc(100dvh-512px)] min-h-96 flex-col">
        <div className="grid grid-cols-2 gap-4 px-4 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredIcons.map((icon, index) => (
            <AddIconButton key={`icon-${index}`} icon={icon[1]} />
          ))}
        </div>
      </ScrollArea>
    </>
  )
}

export { SearchIcons }
