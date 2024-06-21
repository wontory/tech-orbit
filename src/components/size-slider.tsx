'use client'

import { useAtom } from 'jotai'

import { Slider } from '@/components/ui/slider'
import { sizeAtom } from '@/atoms/size'

function SizeSlider() {
  const [size, setSize] = useAtom(sizeAtom)

  return (
    <Slider
      defaultValue={size}
      min={300}
      max={1500}
      step={50}
      onValueChange={(value) => setSize(value)}
      className="py-1.5"
    />
  )
}

export { SizeSlider }
