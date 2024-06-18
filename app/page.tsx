import { MarkdownSyntaxSection } from '@/components/markdown-syntax-section'
import { PreviewSection } from '@/components/preview-section'
import { SizeSliderSection } from '@/components/size-slider-section'
import { TitleInputSection } from '@/components/title-input-section'
import { IconSelectSection } from '@/components/icon-select-section'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 font-sans lg:flex-row-reverse lg:items-start">
      <div className="flex-0 flex w-full flex-col items-center gap-12 lg:w-1/2">
        <MarkdownSyntaxSection />
        <PreviewSection />
        <SizeSliderSection />
      </div>
      <div className="flex-0 flex w-full flex-col items-center gap-12 lg:w-1/2">
        <TitleInputSection />
        <IconSelectSection />
      </div>
    </main>
  )
}
