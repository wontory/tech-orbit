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
      <ScrollArea className="flex max-h-[calc(100vh-512px)] flex-col">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {filteredIcons.map((icon, index) => (
            <AddIconButton key={`icon-${index}`} icon={icon[1]} />
          ))}
        </div>
      </ScrollArea>
    </>
  )
}

export { SearchIcons }
