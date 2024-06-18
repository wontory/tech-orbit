import { DurationSlider } from '@/components/duration-slider'
import { SizeSlider } from '@/components/size-slider'

function SliderSection() {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Size</h2>
      <SizeSlider />
      <h2 className="mt-8 text-2xl font-bold">Duration</h2>
      <DurationSlider />
    </section>
  )
}

export { SliderSection }
