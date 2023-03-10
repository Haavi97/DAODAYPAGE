import Image from 'next/image'

import { Container } from '@/components/Container'
import logoINO from '@/images/logos/ino.svg'
import logoFounderly from '@/images/logos/founderly.svg'
import logoPWC from '@/images/logos/pwc.svg'
import logoMinterest from '@/images/logos/minterest.svg'
import logoCoinsPaid from '@/images/logos/coinspaid.svg'
import logoChainalysis from '@/images/logos/chainalysis.svg'
import logoEasyFeedbackToken from '@/images/logos/easyfeedbacktoken.svg'
import logoWert from '@/images/logos/wert.svg'

const sponsors = [
  { name: 'Internet Native Organization', logo: logoINO },
  { name: 'Founderly', logo: logoFounderly },
  { name: 'PwC Legal', logo: logoPWC },
  { name: 'Minterest', logo: logoMinterest },
  { name: 'Chainalysis', logo: logoChainalysis },
  { name: 'Wert', logo: logoWert },
  { name: 'CoinsPaid', logo: logoCoinsPaid },
  { name: 'Easy Feedback Token', logo: logoEasyFeedbackToken },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Organizers and Supporters
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-2 place-content-center gap-y-12 gap-x-16 sm:grid-cols-4 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={"flex items-center justify-center " + (sponsor.name === 'Internet Native Organization' ? "sm:col-span-4 col-span-2" : "")}
            >
              <Image height={sponsor.name === 'Internet Native Organization' ? 150 : 75} src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative space-x-3 rounded-full bg-gradient-to-r from-pink-50 to-blue-50 px-4 py-1.5 text-sm leading-6 text-blue-900 ring-1 ring-inset ring-pink-900/5">
            <span className="hidden md:inline">Is your company interested in sponsoring DAO Day?</span>
            <a href="https://info.internetnative.org/dd-sponsors" className="font-semibold text-blue-600">
              <span className="absolute inset-0" aria-hidden="true" /> Apply To Sponsor{' '}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}