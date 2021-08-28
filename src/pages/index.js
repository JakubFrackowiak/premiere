import Head from 'next/head'
import Image from 'next/image'
import { Column } from 'components/common'
import Header from 'components/Header'
import AllGames from 'components/AllGames'
import SocialsSection from 'components/SocialsSection'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <Column>
      <Head>
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AllGames />
      <SocialsSection />
      <Footer />
    </Column>
  )
}

