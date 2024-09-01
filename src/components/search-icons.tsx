'use client'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { IconsList } from './icons-list'

function SearchIcons() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase())
  }

  return (
    <>
      <h2 className="text-xl font-bold">Search</h2>
      <Input placeholder="Search Icons" onChange={handleSearch} />
      <IconsList searchValue={searchValue} />
    </>
  )
}

export { SearchIcons }
