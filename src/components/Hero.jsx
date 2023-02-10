import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <strong class="mb-2 block text-2xl font-medium tracking-tighter text-blue-600">
            A Conference Exploring
          </strong>
          <h1 class="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-5xl">
            The Future Of Community, Coordination & Collaboration
          </h1>
          <dl className="my-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Date', 'March 28'],
              ['Speakers', '30'],
              ['People Attending', '500+'],
              // ['Venue', 'Tallinn'],
              // ['Location', 'Tallinn, Estonia'],
              ['Target groups', 'Legal, Tech & Academics'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-blue-900">
            <p>
              Prepare for a full day of expert-led presentations and panel
              discussions that will provide you with an in-depth introduction to
              the internet-first organizational structure. This autonomous model
              is reshaping how people work together, share profits and make
              decisions in ways that traditional organizations can’t. The impact
              on global society could be tremendous.
            </p>
            <p>
              The event is being organized by the non-profit{' '}
              <strong>Internet Native Organization (INO)</strong>, which is
              working to introduce a tooling and legal Sandbox that will allow
              it to test Estonia’s legal framework for internet-first
              organizations.
            </p>
          </div>
          <Button
            href="https://info.internetnative.org/dd-registration"
            className="mt-10 w-full sm:hidden"
          >
            Get your tickets
          </Button>
        </div>
      </Container>
    </div>
  )
}
