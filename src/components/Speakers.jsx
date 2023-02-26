import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import paulBImage from '@/images/avatars/paul-brody-ey.jpg'
import aidenS from '@/images/avatars/aiden-slavin-wef.jpg'
import eyalEImage from '@/images/avatars/eyal-eithcowich-deepdao.jpg'
import kevinO from '@/images/avatars/kevin-owocki-gitcoin.jpg'
import johnnyC from '@/images/avatars/johnny-chin-origami.jpg'
import connorS from '@/images/avatars/connor-spelliscy-drc.jpg'
import priitL from '@/images/avatars/priit-laat-pwc.jpg'
import kaidoK from '@/images/avatars/kaido-kunnapas-sorainen.jpg'
import viljarK from '@/images/avatars/viljar-kahari-edau.jpg'
import ottV from '@/images/avatars/ott-velsberg-mkm.jpg'
import mariL from '@/images/avatars/mari-liis-kukk-fi.jpg'
import astraT from '@/images/avatars/astra-tikas-ino.jpg'
import stenverJ from '@/images/avatars/stenver-jerkku-swd.jpg'
import dimaS from '@/images/avatars/dima-sarle-earthians.jpg'
import idirL from '@/images/avatars/idir-laurent-khiar.jpg'

const days = [
  {
    name: 'DAO Day',
    date: 'March 28',
    dateTime: '2023-03-28',
    speakers: [
      {
        name: 'Paul R. Brody',
        role: 'Global Blockchain Leader, EY',
        image: paulBImage,
      },
      {
        name: 'Aiden Slavin',
        role: 'CISA Project Lead, World Economic Forum',
        image: aidenS,
      },
      {
        name: 'Eyal Eithcowich',
        role: 'CEO, DeepDAO',
        image: eyalEImage,
      },
      {
        name: 'Kevin Owocki',
        role: 'Founder, GitCoin/Supermodular',
        image: kevinO,
      },
      {
        name: 'Johnny Chin',
        role: 'Co-Founder, Origami',
        image: johnnyC,
      },
      {
        name: 'Connor Spelliscy',
        role: 'Executive Director, DAO Research Collective',
        image: connorS,
      },
      {
        name: 'Priit Lätt',
        role: 'Partner, PwC Legal Baltics',
        image: priitL,
      },
      {
        name: 'Kaido Künnapas',
        role: 'Partner, Sorainen Law Firm',
        image: kaidoK,
      },
      {
        name: 'Viljar Kähari',
        role: 'Board Member, Estonian Digital Assets Union',
        image: viljarK,
      },
      {
        name: 'Ott Velsberg',
        role: 'Chief Data Officer, Republic of Estonia',
        image: ottV,
      },
      {
        name: 'Mari-Liis Kukk',
        role: 'Head of Innovation Department, Estonian Financial Supervision and Resolution Authority',
        image: mariL,
      },
      {
        name: 'Astra Tikas',
        role: 'Founding Board Member, Internet Native Organization',
        image: astraT,
      },
      {
        name: 'Stenver Jerkku',
        role: 'Founder & CEO, Solid World DAO',
        image: stenverJ,
      },
      {
        name: 'Dima Sarle',
        role: 'Founder and CEO, Earthians',
        image: dimaS,
      },
      {
        name: 'Dr. Idir Laurent Khiar',
        role: 'Privacy & ICT Law, PEAK7',
        image: idirL,
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
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
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 font-display text-xl lg:text-2xl tracking-tight text-blue-900">
          Featuring an impressive lineup of industry experts, innovators, and thought leaders.
          </p>
        </div>
        
            
          <div className="mt-14 lg:mt-24">
              <div
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none">
                {days[0].speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt="{speaker.name}"
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </div>
          </div>
      </Container>
    </section>
  )
}
