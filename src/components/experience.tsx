import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-5'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-4/6'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}