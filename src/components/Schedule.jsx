import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const introSchedule = [
  {
    date: '9:30 OPENING & INTRO',
    dateTime: '2023-03-28',
    summary:
      'Opening words and speeches from the organizers and important people.',
    timeSlots: [
      {
        name: 'Astra Tikas. INO',
        description: 'DAO Regulations today.',
        start: '9:30AM',
        end: '09:35AM',
      },
      {
        name: 'Sandra Särav. Ministry of Economic Affairs and Communications',
        description: 'Meaningful intro speech from an important person',
        start: '09:35AM',
        end: '11:00AM',
      },
      {
        name: 'Tiit Land',
        description: 'TalTech rektor intro',
        start: '09:45AM',
        end: '09:50PM',
      },
    ],
  },
]

const schedule = [
  {
    date: '09.50 I  DAO LANDSCAPE',
    dateTime: '2023-03-28',
    summary:
      "We will start with some inspirational speeches about DAO's and hear about the basics of DAO's.",
    timeSlots: [
      {
        name: 'eResidency, Maren?',
        description: 'What DAO mentality can provide to society?',
        start: '9:50AM',
        end: '09:55AM',
      },
      {
        name: 'Tea. Legal Lab',
        description: 'Stealing fingerprints',
        start: '09:55AM',
        end: '10:00AM',
      },
      {
        name: 'DAO builder from outside Estonia',
        description: 'Anatomy of the DAO World',
        start: '10:00AM',
        end: '10:30AM',
      },
      {
        name: 'Priit Lätt, PWCL',
        description: 'Estonian DAO experience',
        start: '10:30AM',
        end: '10:45AM',
      },
      {
        name: 'Dima Sarle. Earthians',
        description: 'How does DAO work technically?',
        start: '10:45AM',
        end: '11:00AM',
      },
      {
        name: 'Leader: Sander Gansen (NFT Tallinn)',
        description: 'Panel discussion: Is a DAO just a trend?',
        start: '11:00AM',
        end: '11:30AM',
      },
      {
        name: 'Break',
        description: null,
        start: '11:30AM',
        end: '12:00AM',
      },
    ],
  },
  {
    date: '11:40 II DAO REGULATION',
    dateTime: '2023-03-28',
    summary:
      'We will discuss what is the current regulatory landscape for DAOs and what are the future plans.',
    timeSlots: [
      {
        name: 'Magnus Jones. EY',
        description: 'DAO Regulations today.',
        start: '11:40AM',
        end: '11:55AM',
      },
      {
        name: 'Ian Lee. Syndicate DAO',
        description:
          'How can DAOs be legally operated (the case of investment DAOs)?',
        start: '11:55AM',
        end: '12:10PM',
      },
      {
        name: 'Sandra Särav. Ministry of Economic Affairs and Communications.',
        description:
          'Is the Estonian government ready enough to implement automated systems?',
        start: '12:10PM',
        end: '12:25PM',
      },
      {
        name: 'Innar Liiv, Tanel Kerikmäe, Ahto Buldas, Tannel Tammet?',
        description:
          'Academic approach to blockchain technologies and legal aspects involving it.',
        start: '12:25PM',
        end: '1:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '1:00PM',
        end: '2:00PM',
      },
    ],
  },
  {
    date: '14.00 III CURRENT CHALLENGES',
    dateTime: '2023-03-28',
    summary:
      "We discuss what are the fronts in which DAO's have the biggest challenges.",
    timeSlots: [
      {
        name: 'Julia Ront',
        description: 'KYC & AML challenges. ',
        start: '02:00PM',
        end: '02:20PM',
      },
      {
        name: 'Kaido Künnapas?',
        description: 'DAO taxes & auditing',
        start: '02:20PM',
        end: '02:40PM',
      },
      {
        name: 'Idir Laurent',
        description: 'Data privacy issue in open-source code & members',
        start: '02:40PM',
        end: '02:40PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Join us for a full day of exploration and learning on the latest
            developments and future potential of decentralized autonomous
            organizations (DAOs).
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Our agenda includes keynote speakers, panel discussions, breakout
            sessions, workshops and networking opportunities. With a diverse
            range of topics covered, you will leave the conference with a deeper
            understanding of the cutting-edge technology and trends driving the
            future of decentralized governance.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
