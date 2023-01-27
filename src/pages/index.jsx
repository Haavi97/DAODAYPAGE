import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { NavBubble } from '@/components/NavBubble'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>DAO Day - A Full Day Of Dedicated Foray Into The DAO</title>
        <meta
          name="description"
          content="We'll delve into some complex legal and tooling questions surrounding DAOs and discuss Estonia's legal framework for creating and managing them—and plenty more—at this one-day conference."
        />
      </Head>
      <Header />
      <NavBubble />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
