import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <motion.div
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center' 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
  >
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Contact
    </h3>

    <div className='flex flex-col space-y-10'>
      <h4 className='text-4xl font-semibold text-center'>
        I have got just what you need.{" "}
        <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
      </h4>

      <div className='space-y-10'>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>+1234567890</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>rahal.aires@gmail.com</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>123 Developer Lane</p>
        </div>
      </div>

      <form className='flex flex-col space-y-2 w-fit mx-auto'>

        <div className='flex space-x-2'>
          <input placeholder='Name' className='contactInput' type={'text'} />
          <input placeholder='Email' className='contactInput' type={'email'} />
        </div>

        <input placeholder='Subject' className='contactInput' type={'text'}>

        </input>

        <textarea placeholder='Message' className='contactInput' />
        <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>


      </form>
    </div>

    </motion.div>
  )
}