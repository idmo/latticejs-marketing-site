import { useId } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            An API-first approach to customizing your custom app.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because every update and revision to your shouldn't require
            modifying the source code.
          </p>
        </div>
      </Container>
    </section>
  )
}
