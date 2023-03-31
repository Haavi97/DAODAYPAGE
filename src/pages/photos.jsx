import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { pitures } from '@/components/Pictures'

export default function Photos() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Photo gallery - DAO Day Estonia</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <main>
        <div className="bg-white py-16 px-6 lg:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
              Photo gallery
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-blue-900">
            DAO Day was an incredible experience for all who attended. The
            photos captured at the event will help you relive the memories.
          </p>
          <Gallery galleryID="my-test-gallery" images={pitures} />
        </div>
      </main>
      <Footer />
    </>
  )
}
