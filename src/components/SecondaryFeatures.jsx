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
        <div className="max-w-5xl mx-auto md:text-center">
          <h2 className="text-2xl tracking-tight font-display text-slate-900 sm:text-4xl">
            An API-first approach to customizing your custom app.
          </h2>
          <p className="mt-4 text-xl tracking-tight text-slate-700">
            You, the developer, can control what users can and cannot edit. This
            allows you to control how much, or how little end users can directly
            change and modify your app.
          </p>
        </div>
      </Container>
    </section>
  )
}
