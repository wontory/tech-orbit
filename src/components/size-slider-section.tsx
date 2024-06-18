'use client'

import { useAtom } from 'jotai'

import { Slider } from '@/components/ui/slider'
import { sizeAtom } from '@/atoms/size'

function SizeSliderSection() {
  const [size, setSize] = useAtom(sizeAtom)

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Size</h2>
      <Slider
        defaultValue={size}
        min={300}
        max={1500}
        step={50}
        onValueChange={(value) => setSize(value)}
      />
    </section>
  )
}

export { SizeSliderSection }
