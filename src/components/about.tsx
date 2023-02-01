import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img 
        src='https://avatars.githubusercontent.com/u/77216006?v=4'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x:0,
          opacity: 1
        }}
      />

      <div className='space-y10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
        </h4>
        <p className='text-sm'>
        My name is Tiago Rahal and I am a full-stack developer. As my partners and teammates that worked with me on projects like EasyB2B web application, can tell, I am extremely helpful, I like to mediate conflicts and I get along with others easily, three characteristics that make me good when it comes to working in a team.
        I have experience in giving and receiving constant code reviews and have done several real-life projects.
        </p>
      </div>
    </motion.div>
  )
}