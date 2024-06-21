'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { MarkdownSyntaxSection } from '@/components/markdown-syntax-section'
import { PreviewSection } from '@/components/preview-section'
import { SliderSection } from '@/components/slider-section'
import { TitleInputSection } from '@/components/title-input-section'
import { IconSelectSection } from '@/components/icon-select-section'

export default function Home() {
  return (
    <main className="grid grid-cols-1 justify-center gap-16 font-sans lg:grid-cols-2 2xl:grid-cols-7">
      <ScrollArea className="max-h-[calc(100dvh-128px)] lg:order-last 2xl:col-span-2">
        <div className="flex w-full flex-col items-center gap-12">
          <img src="/logo.svg" alt="TECH-ORBIT" className="w-full" />
          <span className="sr-only">TECH-ORBIT</span>
          <MarkdownSyntaxSection />
          <PreviewSection />
          <SliderSection />
        </div>
      </ScrollArea>
      <ScrollArea className="max-h-[calc(100dvh-128px)] lg:order-first 2xl:col-span-5">
        <div className="flex w-full flex-col items-center gap-12">
          <TitleInputSection />
          <IconSelectSection />
        </div>
      </ScrollArea>
    </main>
  )
}
