import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pt-20 pb-20 text-center lg:pt-32">
      <h1 className="max-w-4xl mx-auto text-5xl font-medium tracking-tight font-display text-slate-900 sm:text-7xl">
        No Code For Your Code{' '}
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-lg tracking-tight text-slate-700">
        Lattice is a framework that enables you to bring no code features and
        functionality to your React and React Native apps.
      </p>
    </Container>
  )
}
