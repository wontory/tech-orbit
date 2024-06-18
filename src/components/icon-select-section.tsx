'use client'

import { useMemo, useState } from 'react'

import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { IconButton } from '@/components/icon-button'
import { icons } from '@/assets/icons'

function IconSelectSection() {
  const [searchValue, setSearchValue] = useState('')

  const filteredIcons = useMemo(
    () =>
      Object.entries(icons).filter((icon) =>
        icon[1].title.toLowerCase().includes(searchValue),
      ),
    [searchValue],
  )

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase())
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Icons</h2>
      <Input placeholder="Search Icons" onChange={handleSearch} />
      <ScrollArea className="flex max-h-[calc(100vh-368px)] flex-col">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredIcons.map((icon, index) => (
            <IconButton key={`icon-${index}`} icon={icon[1]} />
          ))}
        </div>
      </ScrollArea>
    </section>
  )
}

export { IconSelectSection }
