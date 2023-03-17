import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

function extendUrl(query) {
  return query.promo && query.ref
    ? `?promo=${query.promo}&ref=${query.ref}`
    : query.promo
    ? `?promo=${query.promo}`
    : query.ref
    ? `?ref=${query.ref}`
    : ''
}

export function Header() {
  const router = useRouter()
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
            <a
              href="https://internetnative.org/about/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block rounded-lg py-1 px-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-900"
            >
              About the organizer
            </a>
            <a
              href="https://internetnative.org/contact/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block rounded-lg py-1 px-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-900"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href={'/tickets' + extendUrl(router.query)}>Register</Button>
        </div>
      </Container>
    </header>
  )
}
