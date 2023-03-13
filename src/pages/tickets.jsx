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
      name: 'Delegate Pass',
      id: 'delegate-pass',
      href: 'https://info.internetnative.org/dd-invite',
      price: 'Free',
      title: 'Apply to request an in-person invitation!',
      description:
        'The in-person attendance is limited and will be approved. Priority will be given to public sector representatives from governmental, research, and academic institutions.',
      cta: 'Apply Now',
      highlighted: false,
    },
    {
      name: 'Online Pass',
      id: 'online-pass',
      href:
        'https://buy.stripe.com/8wM7uu7MLfHc33a9AB' + router.query.promo
          ? '?prefilled_promo_code=' + router.query.promo
          : '',
      price: '€9',
      title: 'Join virtually from anywhere!',
      description:
        'You can access our outstanding programming from anywhere in the world with this online-only pass.',
      cta: 'Buy Now',
      highlighted: false,
    },
    {
      name: 'Student Pass',
      id: 'student-pass',
      href: 'https://info.internetnative.org/dd-students',
      price: 'Free',
      title: 'Request a free online pass to join virtually!',
      description:
        'Open to all students, from elementary to postgraduate, as well as recent college graduates. Please provide us with a .edu or university email address and the name of your institution during registration.',
      cta: 'Apply Now',
      highlighted: false,
    },
    {
      name: 'Patron Pass',
      id: 'patron-pass',
      href:
        'https://buy.stripe.com/14kdSS6IHcv06fm4gg' + router.query.promo
          ? '?prefilled_promo_code=' + router.query.promo
          : '',
      price: '€500',
      title: 'Skip the waiting list and join the VIP party!',
      description:
        'Support DAO Day Estonia by buying a Patron pass, and you will get guaranteed in-person entrance and an invite to the VIP after party.',
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
                <p className="mt-3 grow text-sm leading-6 text-slate-500">
                  {tier.description}
                </p>
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
        </div>
      </main>
      <Footer />
    </>
  )
}
