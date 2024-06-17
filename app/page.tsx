import { IconSelectSection } from '@/components/icon-select-section'
import { TitleInputSection } from '@/components/title-input-section'

export default function Home() {
  return (
    <main className="flex flex-col items-center font-sans md:flex-row">
      <div className="flex flex-col items-center gap-12">
        <TitleInputSection />
        <IconSelectSection />
      </div>
    </main>
  )
}
