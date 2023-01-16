import Image from 'next/image'

import { Container } from '@/components/Container'
import logoINO from '@/images/logos/logo.png'
import logoLegalLab from '@/images/logos/legallab.png'
import logoEResidency from '@/images/logos/e-residency_official-2.png'

const sponsors = [
  { name: 'INO', logo: logoINO },
  { name: 'LegalLab', logo: logoLegalLab },
  { name: 'EResidency', logo: logoEResidency },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current sponsorships for our workshops and speakers.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
