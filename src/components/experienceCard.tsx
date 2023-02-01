import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" h-16 w-16 rounded-full xl:w-[5rem] xl:h-[5rem] object-cover object-center"
        src="https://icons-for-free.com/iconfiles/png/256/super+tiny+icons+javascript-1324450741921820748.png"
        alt='Card image'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>CEO of SPAGHETTI</h4>
        <p className='font-bold text-1xl mt-1'>SPAGHETTI</p>
      </div>
      <div className='flex space-x-2 my-2'>
        <motion.img
          className='h-8 w-8 rounded-full'
          src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png'
          alt='Skill icon'
        />
        <motion.img
          className='h-8 w-8 rounded-full'
          src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png'
          alt='Skill icon'
        />
        <motion.img
          className='h-8 w-8 rounded-full'
          src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png'
          alt='Skill icon'
        />
        <motion.img
          className='h-8 w-8 rounded-full'
          src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png'
          alt='Skill icon'
        />
      </div>
      <p className='uppercase py-1 text-gray-300'>STARTED work... - ENDED...</p>
      
      <ul className='list-disc space-y-3 ml-5 text-lg'>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
      </ul>
    </article>
  )
}