import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function getUrlParam(query) {
  return query.promo && query.ref
    ? `?prefilled_promo_code=${query.promo}&utm_source=${query.ref}`
    : query.promo
    ? `?prefilled_promo_code=${query.promo}`
    : query.ref
    ? `?utm_source=${query.ref}`
    : ''
}

export default function Watch() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Watch Sessions - DAO Day Estonia</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <main>
        <div className="bg-white py-16 px-6 lg:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
              Watch Sessions
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-blue-900">
            Thank you for making DAO Day an amazing experience. If you missed
            the event and want to catch up on any of the keynotes or panel
            discussions, they are now available on demand.
          </p>
          <div className="mx-auto mt-16 flex max-w-7xl justify-center">
            <div class="p-2 lg:w-full lg:max-w-md">
              <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold text-gray-600">
                    On Demand Pass
                  </p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                    <span class="text-5xl font-bold tracking-tight text-gray-900">
                      €29
                    </span>
                    <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      EUR
                    </span>
                  </p>
                  <a
                    href={
                      'https://buy.stripe.com/7sI2aa6IHcv0dHOfZ0' +
                      getUrlParam(router.query)
                    }
                    class="mt-10 block w-full rounded-md bg-blue-600 py-2 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                  >
                    Get access
                  </a>
                  <p class="mt-6 text-xs leading-5 text-gray-600">
                    Receipts and invoices are available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
