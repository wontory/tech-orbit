import { SelectedIcons } from '@/components/selected-icons'
import { SearchIcons } from '@/components/search-icons'

function IconSelectSection() {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Icons</h2>
      <SelectedIcons />
      <SearchIcons />
    </section>
  )
}

export { IconSelectSection }
