import Head from 'next/head'
import Header from '@/components/header'
import Hero from '@/components/hero'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tiago Rahal</title>
        <meta name="description" content="Tiago Rahal Aires Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id='hero'>
        <Hero />
      </section>
      
    </div>
  )
}
