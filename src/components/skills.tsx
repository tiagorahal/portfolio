import React from 'react'
import { motion } from 'framer-motion'

import Javascript from  '../../public/js.png'
import ReactJs from '../../public/react.png'
import RoR from '../../public/ror.png'
import AWS from '../../public/aws.png'
import Docker from '../../public/docker.png'
import Java from '../../public/java.png'
import MySql from '../../public/mysql.png'
import PHP from '../../public/php.png'
import Postgres from '../../public/postgres.png'
import Ruby from '../../public/ruby.png'

type Props = {
  directionLeft?: boolean;
}

export default function Skills({ directionLeft }: Props) {
  return (
    <motion.div
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center' 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>
      <div className='grid grid-cols-4 gap-5'>


      {/* RoR */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={RoR.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              90%
            </p>
          </div>
        </div>
      </div>

      {/* Ruby */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={Ruby.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              90%
            </p>
          </div>
        </div>
      </div>

      {/* JS */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={Javascript.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              90%
            </p>
          </div>
        </div>
      </div>

      {/* React */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={ReactJs.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              70%
            </p>
          </div>
        </div>
      </div>

      {/* AWS */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={AWS.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              60%
            </p>
          </div>
        </div>
      </div>

      {/* Java */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={Java.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              40%
            </p>
          </div>
        </div>
      </div>

      {/* PHP */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={PHP.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              40%
            </p>
          </div>
        </div>
      </div>

      {/* Docker */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={Docker.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              30%
            </p>
          </div>
        </div>
      </div>

      {/* postgres */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={Postgres.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              70%
            </p>
          </div>
        </div>
      </div>

      {/* mysql */}
      <div className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
          src={MySql.src}
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
          xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>
              70%
            </p>
          </div>
        </div>
      </div>

    </div>
    </motion.div>
  )
}
