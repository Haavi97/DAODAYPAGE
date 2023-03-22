import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function extendUrl(query) {
  return query.promo && query.ref
    ? `?promo=${query.promo}&ref=${query.ref}`
    : query.promo
    ? `?promo=${query.promo}`
    : query.ref
    ? `?ref=${query.ref}`
    : ''
}

export function Hero() {
  const router = useRouter()
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
        <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DAO Day Estonia - </span>The Future Of
            Community, Governance & Collaboration
          </h1>
          <div className="mt-6 font-display text-base tracking-tight text-blue-900 lg:text-xl">
            <div class="lg:flex">
              <div class="space-y-6 lg:w-3/4 lg:pr-16">
                <p>
                  In the first-ever biggest DAO conference in Europe, experts
                  from across the academic, public, private, legal, compliance,
                  and fintech sectors will gather to explore the future of DAOs
                  as a new way to organize and collaborate.
                </p>
                <p>
                  This full-day hybrid conference features expert-led
                  presentations and panel discussions designed to give you an
                  in-depth introduction to the internet-first organizational
                  structure and its impact on innovation.
                </p>
              </div>
              <div class="hidden flex-col justify-between space-y-8 lg:flex">
                <div class="lg:flex lg:flex-auto lg:justify-center">
                  <dl class="w-64 space-y-6 xl:w-80">
                    <div class="flex flex-col-reverse gap-y-1">
                      <dt class="text-base leading-7 text-blue-600">Date</dt>
                      <dd class="text-xl font-semibold tracking-tight text-blue-900">
                        March 28, 2023
                      </dd>
                    </div>
                    <div class="flex flex-col-reverse gap-y-1">
                      <dt class="text-base leading-7 text-blue-600">Venue</dt>
                      <dd class="text-xl font-semibold tracking-tight text-blue-900">
                        <a
                          href="https://goo.gl/maps/7gWELQRoVbfpuZJA9"
                          target="_blank"
                          rel="noreferrer noopener"
                          class="hover:text-blue-600"
                        >
                          Erinevate Tubade Klubi
                        </a>
                        , Tallinn
                      </dd>
                    </div>
                  </dl>
                </div>
                <Button
                  href={'/tickets' + extendUrl(router.query)}
                  className="flex w-full space-x-3"
                >
                  <span>Register Now</span>{' '}
                  <span aria-hidden="true">&rarr;</span>
                </Button>
              </div>
            </div>
          </div>
          <Button
            href={'/tickets' + extendUrl(router.query)}
            className="mt-10 flex w-full space-x-3 lg:hidden"
          >
            <span>Register Now</span> <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </Container>
    </div>
  )
}
