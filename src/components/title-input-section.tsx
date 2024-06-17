import { Input } from '@/components/ui/input'

function TitleInputSection() {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Title</h2>
      <Input placeholder="Enter Title" />
    </section>
  )
}

export { TitleInputSection }
