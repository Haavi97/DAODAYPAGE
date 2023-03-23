import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

import Link from 'next/link'
import Image from 'next/image'

import logoINO from '@/images/logos/ino.svg'

export function HeaderAgenda() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link href="/" aria-label="Home">
            <Logo className="h-16 w-auto text-slate-900" />
          </Link>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p className="flex lg:hidden">
              <time dateTime="2022-04-06">March 28, 2023</time>
            </p>
            <DiamondIcon className="flex h-1.5 w-1.5 overflow-visible fill-current stroke-current lg:hidden" />
            <p className="flex lg:hidden">
              <span class="hover:text-blue-600">Erinevate Tubade Klubi</span>,
              Tallinn & Online
            </p>
            <span className="hidden rounded-lg py-1 px-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-900 lg:inline-block">
              Erinevate Tubade Klubi
            </span>
            <span className="hidden rounded-lg py-1 px-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-900 lg:inline-block">
              March 28, 2023
            </span>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image
            src={logoINO}
            alt={'Internet Native Organization'}
            unoptimized
          />
        </div>
      </Container>
    </header>
  )
}
