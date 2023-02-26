import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

const stats = [
  { id: 1, name: 'Speakers', value: '30' },
  { id: 2, name: 'Attendees', value: '500+' },
]

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]"
          src="https://tailwindui.com/img/beams-home@95.jpg"
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
        <div className="mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex items-center gap-4 mb-2 text-blue-900 text-sm md:text-2xl font-medium">
            <p>
              <time dateTime="2022-04-06">March 28, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Tallinn, Estonia & Online</p>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DAO Day Estonia - </span>The Future Of Community, Governance & Collaboration 
          </h1>
          <div className="mt-6 font-display text-base lg:text-xl tracking-tight text-blue-900">
            <div class="lg:flex">
              <div class="space-y-6 lg:w-3/4 lg:pr-16">
                <p>  
                In the first-ever biggest DAO conference in Europe, experts from across the academic, public, private, legal, compliance, and fintech sectors will gather to explore the future of DAOs as a new way to organize and collaborate.
                </p>
                <p>
                This full-day hybrid conference features expert-led presentations and panel discussions designed to give you an in-depth introduction to the internet-first organizational structure and its impact on innovation.
                </p>
                <p>Free registration is available for a limited number of public sector representatives from governmental, research, and academic institutions.</p>
              </div>
              <div class="hidden lg:flex flex-col justify-between">
                <div>
                  <dl className="mt-2 flex-1 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2">
                    {stats.map((stat) => (
                      <div key={stat.id} className="flex flex-col gap-y-3 border-l border-blue-900/10 pl-6">
                        <dt className="font-mono text-sm text-blue-600">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-blue-900">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <Button href="https://info.internetnative.org/dd-registration" className="flex space-x-3 w-full">
                  <span>Register Now</span> <span aria-hidden="true">&rarr;</span>
                </Button>
              </div>
            </div>
          </div>
          <Button href="https://info.internetnative.org/dd-registration" className="mt-10 flex space-x-3 w-full sm:hidden">
            <span>Register Now</span> <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </Container>
    </div>
  )
}
