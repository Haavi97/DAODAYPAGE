import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tickets() {
  const router = useRouter()
  const tiers = [
    {
      name: 'Complimentary Pass',
      id: 'complimentary-pass',
      href: 'https://info.internetnative.org/dd-invite',
      price: 'Free*',
      title: 'Apply to request an in-person invitation!',
      description:'Are you a DAO builder/operator, founder, cofounder, or C-level executive of a series B+ startup/scaleup? A journalist from an influential publication? Or a public sector representative from a research/academic institution?',
      benefits: ['Full in-person access to the agenda including keynotes, interviews and panels', 'Light breakfast, lunch and coffee breaks'],
      cta: 'Apply Now',
      highlighted: false,
    },
    {
      name: 'Online Pass',
      id: 'online-pass',
      href:
        'https://buy.stripe.com/8wM7uu7MLfHc33a9AB' +
        (router.query.promo
          ? '?prefilled_promo_code=' + router.query.promo
          : ''),
      price: '€9',
      title: 'Join virtually from anywhere!',
      description: 'For anyone interested in exploring the possibilities of a DAO (Decentralized Autonomous Organization) and the future of community governance, collaboration and association.',
      benefits: ['Full online access to the agenda including keynotes, interviews and panels'],
      cta: 'Buy Now',
      highlighted: false,
    },
    {
      name: 'Student Pass',
      id: 'student-pass',
      href: 'https://info.internetnative.org/dd-students',
      price: 'Free',
      title: 'Request a free online pass to join virtually!',
      description: 'Open to all students, from elementary to postgraduate, as well as recent college graduates. Please provide us with a .edu or university email address and the name of your institution during registration.',
      benefits: ['All benefits of an online pass'],
      cta: 'Apply Now',
      highlighted: false,
    },
    {
      name: 'Business Pass',
      id: 'business-pass',
      href:
        'https://buy.stripe.com/14kdSS6IHcv06fm4gg' +
        (router.query.promo
          ? '?prefilled_promo_code=' + router.query.promo
          : ''),
      price: '€350',
      title: 'Priority in-person access and more perks!',
      description: 'This pass is for you if you work for a service provider, law firm, consultancy, executive search or big technology company. Or if you are an angel investor or institutional/venture/corporate investor.',
      benefits: ['Full in-person access to the agenda including keynotes, interviews and panels', 'Light breakfast, lunch and coffee breaks', 'Access to round table discussion and executive lounge at the venue', 'Invite to speakers and VIP dinner (registration required)'],
      cta: 'Buy Now',
      highlighted: true,
    },
  ]
  return (
    <>
      <Head>
        <title>Register - DAO Day Estonia</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <main>
        <div className="bg-white py-16 px-6 lg:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
              Conference Passes
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-blue-900">
            Anyone can join and follow along remotely, but there are limited
            in-person spots. Please select the pass type that is appropriate for
            you.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.highlighted
                    ? 'ring-2 ring-blue-600'
                    : 'ring-1 ring-slate-300',
                  'flex flex-col rounded-3xl p-8'
                )}
              >
                <h2
                  id={tier.id}
                  className={classNames(
                    tier.highlighted ? 'text-blue-600' : 'text-blue-900',
                    'text-base font-semibold leading-7'
                  )}
                >
                  {tier.name}
                </h2>
                <h3 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
                  {tier.price}
                </h3>
                <p className="mt-5 text-lg leading-6 text-blue-900">
                  {tier.title}
                </p>
                <div class="grow">
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {tier.description}
                  </p>
                  <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-slate-500">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-x-3">
                        <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-blue-600 py-2 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-4xl text-center mt-8">
            <p class="text-slate-500 text-sm">* We have a limited number of free passes set aside. We want to make sure that DAO Day Estonia has a carefully curated audience so you can have the best experience. We reserve passes for media professionals, public sector, economic gardening organizations and different stages of startups to ensure a diverse audience.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
