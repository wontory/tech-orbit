import Image from 'next/image'

import { MarkdownSyntaxSection } from '@/components/markdown-syntax-section'
import { PreviewSection } from '@/components/preview-section'
import { SliderSection } from '@/components/slider-section'
import { TitleInputSection } from '@/components/title-input-section'
import { IconSelectSection } from '@/components/icon-select-section'

export default function Home() {
  return (
    <main className="grid grid-cols-1 justify-center gap-16 font-sans lg:grid-cols-2 2xl:grid-cols-10">
      <div className="flex w-full flex-col items-center gap-12 lg:order-last 2xl:col-span-3">
        <Image
          src="/logo.svg"
          alt="TECH-ORBIT"
          width={684.9}
          height={71.201}
          draggable={false}
          className="w-full"
        />
        <span className="sr-only">TECH-ORBIT</span>
        <MarkdownSyntaxSection />
        <PreviewSection />
        <SliderSection />
      </div>
      <div className="flex w-full flex-col items-center gap-12 lg:order-first 2xl:col-span-7">
        <TitleInputSection />
        <IconSelectSection />
      </div>
    </main>
  )
}
