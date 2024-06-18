'use client'

import { useSetAtom } from 'jotai'

import { Input } from '@/components/ui/input'
import { titleAtom } from '@/atoms/title'

function TitleInputSection() {
  const setTitle = useSetAtom(titleAtom)

  const handleEditTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Title</h2>
      <Input placeholder="Enter Title" onChange={handleEditTitle} />
    </section>
  )
}

export { TitleInputSection }
