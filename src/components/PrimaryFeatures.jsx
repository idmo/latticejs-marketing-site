import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotRulesEngine from '@/images/screenshots/rules-engine.png'
import screenshotDynamicForms from '@/images/screenshots/dynamic-forms.png'
import screenshotComponents from '@/images/screenshots/components.png'
import screenshotVisualEditor from '@/images/screenshots/visual-editor.png'

const features = [
  {
    title: 'Visual Editor',
    description: 'Create and update forms and components with viusual UI',
    image: screenshotVisualEditor,
    copy: (
      <>
        <p>
          Everyone seems to be talking about No-Code and Low-Code these days.
          It's easy to understand the appeal of providing end users with
          powerful tools that do not require a developer to write custom code.
          Developers do not have to stop what they're doing to make incremental
          changes, while users have more control.
        </p>
        <p>
          The problem is, most No-Code solutions are platforms inextricably tied
          to the data they manipulate. While they provide end users with the
          control and power they crave, they're also storing your organization's
          mission critical information on their servers.
        </p>
        <p>
          The LatticeJS Visual Editor brings a No-Code / Low Code user
          experience and interface to your app. End users won't need to seek out
          3rd Party solutions for features and functionality that should be in
          your app in the first place. The LatticeJS Visual Editor enables end
          users to define and design an app's interactivity by directly editing
          form fields, rules, and layout.
        </p>
      </>
    ),
  },
  {
    title: 'Dynamic Forms',
    description: 'Configuration-based forms can be updated at runtime.',
    image: screenshotDynamicForms,
    copy: (
      <>
        <p>
          Forms were the original Killer App for the web. They enabled
          interactivity, transforming the Web from document delivery to a first
          class application platform. As the Web evolved, forms have become more
          complex and sophisticated. While form markup is straightforward, the
          underlying logic and state management makes them considerably more
          difficult to change and maintain.{' '}
        </p>
        <p>
          LatticeJS provides rule-based, configurable form components
          eliminating the need to directly update markup and source code when
          building and maintaining forms. Simply drop in a LatticeJS Dynamic
          Form component and its configuration instructions and the Rules Engine
          does the rest at runtime.
        </p>
        <p>
          LatticeJS Dynamic Forms declarative, and high-performance React
          components, so they will not slow down your app with unnecessary DOM
          changes or unwanted side effects. Dynamic Forms are headless, so you
          can use any modern component library like TailwindCSS, MUI Material,
          even your own.
        </p>
      </>
    ),
  },
  {
    title: 'Rules Engine',
    description:
      'Deliver apps to your user base they can be modified and updated without having to touch your source code.',
    image: screenshotRulesEngine,
    copy: (
      <>
        <p>
          The Rules Engine is the core enabling technology that makes LatticeJS
          so powerful. Configurable Dynamic Forms can provide all you need for
          validation, display logic, data filters, and unit testing.
        </p>
        <p>
          Most developers know writing form markup isn't the real pain. It's
          having to add and maintain conditional logic in your application as
          end user needs and requirements change after the fact.{' '}
        </p>
        <p>
          LatticeJS Rules Engine lets you, the developer, provide end users with
          adaptability and flexibility to add robust functionality even if it
          wasn't in the initial requirements.
        </p>
        <p>
          The Rules Engine provides a layer of abstraction that removes the need
          to touch source code for simple, but risk-prone changes to markup and
          functionality. This can accelerate the release cycle of your app
          including updates at runtime.
        </p>
      </>
    ),
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative pt-20 overflow-hidden bg-slate-700 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl">
            Everything you need to add No Code functionality
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            LatticeJS Components are flexible and configurable so you can make
            changes at runtime or whenever you want.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded py-1 px-4  lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative max-w-2xl mx-auto text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="overflow-hidden px-4 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[100%]">
                      <div className="space-y-6 text-lg text-white">
                        {feature?.copy}
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
