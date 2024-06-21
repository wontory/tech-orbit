'use client'

import { useAtom } from 'jotai'

import { Slider } from '@/components/ui/slider'
import { durationAtom } from '@/atoms/duration'

function DurationSlider() {
  const [duration, setDuration] = useAtom(durationAtom)

  return (
    <Slider
      defaultValue={duration}
      min={5}
      max={50}
      step={5}
      onValueChange={(value) => setDuration(value)}
      className="py-1.5"
    />
  )
}

export { DurationSlider }
