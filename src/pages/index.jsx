import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { NavBubble } from '@/components/NavBubble'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Timer } from '@/components/Timer'

export default function Home() {
  return (
    <>
      <Head>
        <title>DAO DAY Estonia - March 28, 2023</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://daoday.ee/" />
        <meta
          name="description"
          content="A full day of expert-led presentations and panel discussions that will provide you with an in-depth introduction to the internet-first organizational structure."
        />
        <meta property="og:title" content="DAO DAY Estonia - March 28, 2023" />
        <meta
          property="og:description"
          content="A full day of expert-led presentations and panel discussions that will provide you with an in-depth introduction to the internet-first organizational structure."
        />
        <meta name="image" property="og:image" content="/dao-day-estonia.jpg" />
        <meta
          name="image"
          property="og:image:url"
          content="https://daoday.ee/dao-day-estonia.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://daoday.ee/dao-day-estonia.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors />
        {/* <Newsletter /> */}
      </main>
      <Footer />
      <Timer />
    </>
  )
}
