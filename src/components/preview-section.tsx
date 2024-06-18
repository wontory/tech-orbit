'use client'

import { useAtomValue } from 'jotai'

import { titleAtom } from '@/atoms/title'
import { selectedIconsAtom } from '@/atoms/selected-icons'
import { sizeAtom } from '@/atoms/size'

function PreviewSection() {
  const title = useAtomValue(titleAtom)
  const selectedIcons = useAtomValue(selectedIconsAtom)
  const size = useAtomValue(sizeAtom)

  const transTitle = title.replaceAll(' ', '%20')
  const transIcons = selectedIcons.join(',').replaceAll(' ', '%20')

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Preview</h2>
      <div className="aspect-square">
        <img
          src={`/api?title=${transTitle}&tech=${transIcons}&size=${size}`}
          alt={title}
          className="h-full w-full"
        />
      </div>
    </section>
  )
}

export { PreviewSection }
