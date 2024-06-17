'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { icons } from '@/assets/icons'
import { Input } from '@/components/ui/input'

function IconSelectSection() {
  const iconsArray = Object.entries(icons)
  const [filteredIcons, setFilteredIcons] = useState(iconsArray)
  const [selectedIcons, setSelectedIcons] = useState<string[]>([])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase()

    const filtered = iconsArray.filter((icon) =>
      icon[1].title.toLowerCase().includes(searchValue),
    )

    setFilteredIcons(filtered)
  }

  const handleClick = (title: string) => {
    setSelectedIcons((prev) => [...prev, title])
    console.log(selectedIcons.join(',').replaceAll(' ', '%20'))
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Icons</h2>
      <Input placeholder="Search Icons" onChange={handleSearch} />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredIcons.map((icon, index) => {
          const svg = icon[1].svg.replace('<svg', `<svg fill="#${icon[1].hex}"`)

          return (
            <Button
              key={`icon-${index}`}
              variant="outline"
              size="icon"
              className="flex h-32 w-32 flex-col"
              onClick={() => handleClick(icon[1].title)}
            >
              <div
                dangerouslySetInnerHTML={{ __html: svg }}
                className="h-16 w-16"
              />
              <span className="text-xs">{icon[1].title}</span>
            </Button>
          )
        })}
      </div>
    </section>
  )
}

export { IconSelectSection }
