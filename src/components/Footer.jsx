import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-16 w-auto text-slate-900" />
        <div className="mt-6 text-base text-slate-500 md:mt-0">
          <p>
            Organized by{' '}
            <a
              class="tex-slate-500 hover:text-blue-600"
              target="_blank"
              rel="noreferrer noopener"
              href="https://internetnative.org?ref=daoday"
            >
              Internet Native Organization.
            </a>
          </p>
          <p class="space-x-3 text-center text-sm lg:text-right">
            <Link
              class="tex-slate-500 hover:text-blue-600"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
            <Link
              class="tex-slate-500 hover:text-blue-600"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </Container>
      <div class="relative"></div>
    </footer>
  )
}
