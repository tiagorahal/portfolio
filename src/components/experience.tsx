import React from 'react'
import { motion } from 'framer-motion'
import Easyb2b from '../../public/easyb2b.jpeg'
import Javascript from  '../../public/js.png'
import ReactJs from '../../public/react.png'
import RoR from '../../public/ror.png'
import AWS from '../../public/aws.png'

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
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-4/6 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
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
            src={Easyb2b.src}
            alt='Card image'
          />

          <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Full Stack Developer</h4>
            <p className='font-bold text-1xl mt-1'>EasyB2B</p>
          </div>
          <div className='flex space-x-2 my-2'>
            <motion.img
              className='h-8 w-8 rounded-full'
              src={RoR.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Javascript.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full bg-white'
              src={ReactJs.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={AWS.src}
              alt='Skill icon'
            />
          </div>
          <p className='uppercase py-1 text-gray-300'>STARTED 09/2022 - CURRENT JOB</p>
          
          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Develop new features in the client marketplace.</li>
            <li>Transitioning the front end from Rails to React.</li>
            <li>Refactor all the backend.</li>
          </ul>
        </article>
      </div>
    </motion.div>
  )
}