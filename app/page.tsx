import { Button } from '@/components/ui/button'
import { icons } from '@/assets/icons'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8">
      <h2 className="font-sans text-2xl font-bold">Icons</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Object.entries(icons).map((icon, index) => {
          const svg = icon[1].svg.replace('<svg', `<svg fill="#${icon[1].hex}"`)

          return (
            <Button
              key={`icon-${index}`}
              variant="outline"
              size="icon"
              className="flex h-32 w-32 flex-col"
            >
              <div
                dangerouslySetInnerHTML={{ __html: svg }}
                className="h-16 w-16"
              />
              <span className="font-sans text-xs">{icon[1].title}</span>
            </Button>
          )
        })}
      </div>
    </main>
  )
}
