import React from 'react'
import BackgroundCircles from './backgroundCircles'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's Tiago Rahal",
      "The-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-5'>
      <BackgroundCircles />
      <motion.img
        className='relative rounded-full h-32 w-32'
        src='https://avatars.githubusercontent.com/u/77216006?v=4'
        alt='Profile Pic'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href="#contact">
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}