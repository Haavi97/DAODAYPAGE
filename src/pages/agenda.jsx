import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { HeaderAgenda } from '@/components/HeaderAgenda'
import { Schedule } from '@/components/Schedule'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Agenda() {
  return (
    <>
      <Head>
        <title>Agenda - DAO Day Estonia</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <HeaderAgenda />
      <Schedule />
      <Footer />
    </>
  )
}
