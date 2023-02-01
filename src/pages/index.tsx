import Head from 'next/head'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import ContactMe from '@/components/contactMe'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Tiago Rahal</title>
        <meta name="description" content="Tiago Rahal Aires Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center '>
        <Experience />
      </section>

      <section id='skills' className='snap-start '>
        <Skills />
      </section>

      <section id='projects' className='snap-start '>
        <Projects />
      </section>

      <section id='contact' className='snap-start '>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <motion.img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://avatars.githubusercontent.com/u/77216006?v=4'
              alt='Footer icon'
            />
          </div>
        </footer>
      </Link>
      
    </div>
  )
}
