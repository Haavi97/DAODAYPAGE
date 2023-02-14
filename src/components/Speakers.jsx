import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import astraTikasImage from '@/images/avatars/astra-tikas.jpg'
import dimaSarleImage from '@/images/avatars/dima-sarle.jpg'
import eyalEithcowichImage from '@/images/avatars/eyal-eithcowich.jpg'
import ianLeeImage from '@/images/avatars/ian-lee.jpg'
import idirLaurentImage from '@/images/avatars/idir-laurent.jpg'
import innarLiivImage from '@/images/avatars/innar-liiv.jpg'
import javierOrtinImage from '@/images/avatars/javier-ortin.jpg'
import johnnyChinImage from '@/images/avatars/johnny-chin.jpg'
import juliaRontImage from '@/images/avatars/julia-ront.jpg'
import kevinWerbachImage from '@/images/avatars/kevin-werbach.jpg'
import magnusJonesImage from '@/images/avatars/magnus-jones.jpg'
import mariliisKukkImage from '@/images/avatars/mariliis-kukk.jpg'
import ottVelsbergImage from '@/images/avatars/ott-velsberg.jpg'
import paulBrodyImage from '@/images/avatars/paul-brody.jpg'
import polinaBrottierImage from '@/images/avatars/polina-brottier.jpg'
import priitLattImage from '@/images/avatars/priit-latt.jpg'
import sanderGansenImage from '@/images/avatars/sander-gansen.jpg'
import sandraSaravImage from '@/images/avatars/sandra-sarav.jpg'
import stenverJerkkuImage from '@/images/avatars/stenver-jerkku.jpg'
import tanelKerikmaeImage from '@/images/avatars/tanel-kerikmae.jpg'
import teaKookmaImage from '@/images/avatars/tea-kookma.jpg'
import tiitLandImage from '@/images/avatars/tiit-land.jpg'
import vattanPsImage from '@/images/avatars/vattan-ps.jpg'

const days = [
  {
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Paul R. Brody',
        role: 'Global Blockchain Leader',
        institution: 'EY',
        image: paulBrodyImage,
      },
      {
        name: 'Kevin Werbach',
        role: 'Professor of Legal Studies & Ethics',
        institution: 'The Wharton School',
        image: kevinWerbachImage,
      },
      {
        name: 'Eyal Eithcowich',
        role: 'CEO',
        institution: 'DeepDAO',
        image: eyalEithcowichImage,
      },
      {
        name: 'Johnny Chin',
        role: 'Founder & Chief Growth Officer',
        institution: 'Origami',
        image: johnnyChinImage,
      },
      {
        name: 'Astra Tikas',
        role: 'Founding Board member',
        institution: 'Internet Native Organization',
        image: astraTikasImage,
      },
      // {
      //   name: 'Tea Kookma',
      //   role: 'Lawyer & CEO',
      //   institution: 'TalTech Legal Lab',
      //   image: teaKookmaImage,
      // },
      // {
      //   name: 'Sandra Särav',
      //   role: 'Deputy Secretary General for Business and Consumer Environment',
      //   institution:
      //     'Estonian Ministry of Economic Affairs and Communications.',
      //   image: sandraSaravImage,
      // },
      {
        name: 'Mari-Liis Kukk',
        role: 'Head of Innovation Department',
        institution: 'Estonian Financial Supervision and Resolution Authority',
        image: mariliisKukkImage,
      },
      {
        name: 'Priit Lätt',
        role: 'Partner',
        institution: 'PwC Legal Baltics',
        image: priitLattImage,
      },
      {
        name: 'Ott Velsberg',
        role: 'Chief Data Officer',
        institution: 'Estonian Government',
        image: ottVelsbergImage,
      },
      {
        name: 'Stenver Jerkku',
        role: 'Founder & CEO',
        institution: 'Solid World DAO',
        image: stenverJerkkuImage,
      },
      // {
      //   name: 'Sander Gansen',
      //   role: 'Co-Founder & The Ape',
      //   institution: 'NFT Tallinn',
      //   image: sanderGansenImage,
      // },
      {
        name: 'Dima Sarle',
        role: 'Founder and CEO',
        institution: 'Earthians',
        image: dimaSarleImage,
      },
      // {
      //   name: 'Tanel Kerikmäe',
      //   role: 'Director',
      //   institution: 'Tallinn Law School',
      //   image: tanelKerikmaeImage,
      // },
      {
        name: 'Dr. Idir Laurent Khiar',
        role: 'Privacy & ICT Law',
        institution: 'PEAK7',
        image: idirLaurentImage,
      },
      // {
      //   name: 'Tiit Land',
      //   role: 'Rector',
      //   institution: 'TalTech',
      //   image: tiitLandImage,
      // },
      // {
      //   name: 'Vattan PS',
      //   role: 'Founder and CEO',
      //   institution: 'Founderly',
      //   image: vattanPsImage,
      // },
      {
        name: 'Javier Ortin',
        role: 'Founding Board member',
        institution: 'Internet Native Organization',
        image: javierOrtinImage,
      },
      // {
      //   name: 'Ian Lee',
      //   role: 'Syndicate DAO founder and CEO',
      //   image: ianLeeImage,
      // },
      // {
      //   name: 'Magnus Jones',
      //   role: 'EY',
      //   image: magnusJonesImage,
      // },
      // {
      //   name: 'Innar Liiv',
      //   role: 'TalTech PhD',
      //   image: innarLiivImage,
      // },
      // {
      //   name: 'Polina Brottier',
      //   role: 'Binance Head of Marketing for the Baltics',
      //   image: polinaBrottierImage,
      // },
      // {
      //   name: 'Julia Ront',
      //   role: 'Vespia co-founder and CEO',
      //   image: juliaRontImage,
      // },
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
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Featuring an impressive lineup of industry experts, innovators, and
            thought leaders.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <Tab.Panels className="lg:col-span-4">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-4 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
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
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}, <strong>{speaker.institution}</strong>
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
