'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useAtomValue } from 'jotai'

import { IconSelectSection } from '@/components/icon-select-section'
import { TitleInputSection } from '@/components/title-input-section'
import { Slider } from '@/components/ui/slider'
import { selectedIconsAtom } from '@/atoms/selected-icons'
import { titleAtom } from '@/atoms/title'

export default function Home() {
  const title = useAtomValue(titleAtom)
  const selectedIcons = useAtomValue(selectedIconsAtom)
  const [size, setSize] = useState([500])

  return (
    <main className="flex flex-col items-center gap-16 font-sans lg:flex-row-reverse lg:items-start">
      <div className="flex-0 flex h-full w-full flex-col gap-8 lg:w-1/2">
        <pre className="overflow-x-scroll">
          <code>{`![${title}](https://tech-orbit.wontory.dev/api?title=${title.replaceAll(' ', '%20')}&tech=${selectedIcons.join(',').replaceAll(' ', '%20')}&size=${size})`}</code>
        </pre>
        {selectedIcons.length !== 0 && (
          <div className="relative aspect-square h-full w-full">
            <Image
              src={`/api?title=${title.replaceAll(' ', '%20')}&tech=${selectedIcons.join(',').replaceAll(' ', '%20')}&size=${size}`}
              alt={`${title} with ${selectedIcons.join(', ')}`}
              className="aspect-square"
              fill
            />
          </div>
        )}
        <Slider
          defaultValue={size}
          min={300}
          max={1500}
          step={50}
          onValueChange={(value) => setSize(value)}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-12 lg:w-1/2">
        <TitleInputSection />
        <IconSelectSection />
      </div>
    </main>
  )
}
