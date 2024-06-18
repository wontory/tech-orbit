'use client'

import { useAtomValue } from 'jotai'

import { titleAtom } from '@/atoms/title'
import { selectedIconsAtom } from '@/atoms/selected-icons'
import { sizeAtom } from '@/atoms/size'

function MarkdownSyntaxSection() {
  const title = useAtomValue(titleAtom)
  const selectedIcons = useAtomValue(selectedIconsAtom)
  const size = useAtomValue(sizeAtom)

  const transTitle = title.replaceAll(' ', '%20')
  const transIcons = selectedIcons.join(',').replaceAll(' ', '%20')

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold">Markdown Syntax</h2>
      <pre className="overflow-x-scroll">
        <code>{`![${title}](https://tech-orbit.wontory.dev/api?title=${transTitle}&tech=${transIcons}&size=${size})`}</code>
      </pre>
    </section>
  )
}

export { MarkdownSyntaxSection }
