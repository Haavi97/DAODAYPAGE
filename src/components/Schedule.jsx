import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-agenda.jpg'

const schedule = [
  {
    date: 'April 4',
    dateTime: '2022-04-04',
    summary:
      'The first day of the conference is focused on dark patterns for ecommerce.',
    timeSlots: [
      {
        name: 'Steven McHail',
        description: 'Opening Keynote',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Jaquelin Isch',
        description: 'The finer print',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Dianne Guilianelli',
        description: 'Post-purchase blackmail',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Ronni Cantadore',
        description: 'Buy or die',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Erhart Cockrin',
        description: 'In-person cancellation',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Parker Johnson',
        description: 'The pay/cancel switcheroo',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'April 5',
    dateTime: '2022-04-05',
    summary:
      'Next we spend the day talking about deceiving people with technology.',
    timeSlots: [
      {
        name: 'Damaris Kimura',
        description: 'The invisible card reader',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Ibrahim Frasch',
        description: 'Stealing fingerprints',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Cathlene Burrage',
        description: 'Voting machines',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Rinaldo Beynon',
        description: 'Blackhat SEO that works',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Waylon Hyden',
        description: 'Turning your audience into a botnet',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Giordano Sagucio',
        description: 'Fly phishing',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'April 6',
    dateTime: '2022-04-06',
    summary:
      'We close out the event previewing new techniques that are still in development.',
    timeSlots: [
      {
        name: 'Andrew Greene',
        description: 'Neuralink dark patterns',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Heather Terry',
        description: 'DALL-E for passports',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Piers Wilkins',
        description: 'Quantum password cracking',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Gordon Sanderson',
        description: 'SkyNet is coming',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Kimberly Parsons',
        description: 'Dark patterns for the metaverse',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Richard Astley',
        description: 'Knowing the game and playing it',
        start: '3:00PM',
        end: '4:00PM',
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
          DAO-Forward Agenda
          </h2>
          <p className="mt-4 font-display text-xl lg:text-2xl tracking-tight text-blue-900">
          We’ll delve into some operational, technical, governance and legal questions surrounding DAOs and discuss Estonia’s readiness for creating and managing DAOs—and plenty more.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
              >
                <path
                  fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
        <Container className="relative">
          <div className="space-y-16 max-w-7xl">
            <div>
              <h2 className="text-xl font-semibold leading-6 font-bold text-blue-600">Programming</h2>
              <ol className="mt-2 divide-y divide-blue-200 text-base leading-6 text-blue-900">
              <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T09:30">09:30 AM</time> - <time dateTime="2023-03-28T10:00">10:00 AM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Doors Open</p>
                  <p class="flex-none sm:ml-6 text-sm">Registration & Welcome Coffee</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T10:00">10:00 AM</time> - <time dateTime="2023-03-28T10:25">10:25 AM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Opening & Intro</p>
                  <p class="flex-none sm:ml-6 text-sm">Keynotes</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T10:25">10:25 AM</time> - <time dateTime="2023-03-28T12:00">12:00 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">DAO Landscape</p>
                  <p class="flex-none sm:ml-6 text-sm">Keynotes</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T12:00">12:00 PM</time> - <time dateTime="2023-03-28T13:00">13:00 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Distributed Governance</p>
                  <p class="flex-none sm:ml-6 text-sm">Keynote & Panel Discussion</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T13:00">13:00 PM</time> - <time dateTime="2023-03-28T14:00">14:00 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Lunch Break</p>
                  <p class="flex-none sm:ml-6 text-sm">Network with other participants over a delicious lunch</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T14:00">14:00 PM</time> - <time dateTime="2023-03-28T15:00">15:00 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Decentralized Operations</p>
                  <p class="flex-none sm:ml-6 text-sm">Keynote & Panel Discussion</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T15:00">15:00 PM</time> - <time dateTime="2023-03-28T16:10">16:10 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">The Legal Status Of DAOs</p>
                  <p class="flex-none sm:ml-6 text-sm">Fireside Chat & Panel Discussion</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T16:10">16:10 PM</time> - <time dateTime="2023-03-28T17:15">16:35 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Coffee Break</p>
                  <p class="flex-none sm:ml-6 text-sm">Drinks and light snacks</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T16:10">16:35 PM</time> - <time dateTime="2023-03-28T17:15">17:00 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Estonia&apos;s Readiness For DAOs</p>
                  <p class="flex-none sm:ml-6 text-sm">Panel Discussion</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T17:15">17:00 PM</time> - <time dateTime="2023-03-28T17:30">17:25 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">The Rise Of Internet Native Organizations</p>
                  <p class="flex-none sm:ml-6 text-sm">Panel Discussion</p>
                </li>
                <li className="py-4 sm:flex items-center">
                  <p class="w-48 flex-none">
                    <time dateTime="2023-03-28T17:15">17:25 PM</time> - <time dateTime="2023-03-28T17:30">17:30 PM</time>
                  </p>
                  <p className="mt-2 flex-auto font-semibold sm:mt-0">Wrap Up</p>
                  <p class="flex-none sm:ml-6 text-sm">Closing Remarks</p>
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
