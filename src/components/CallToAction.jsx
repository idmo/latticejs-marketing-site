import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-green-800 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get Started
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Start adding No Code functionality to your custom apps today.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Show me the documentation
          </Button>
        </div>
      </Container>
    </section>
  )
}
