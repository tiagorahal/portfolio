import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
    >

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-5'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {
          projects.map((project, i) =>(
            <motion.div
              key={project}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-5/6 md:p-44"
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 1.5 }}
            >
              <motion.img
                src='https://www.gamespot.com/a/uploads/scale_medium/1444/14446008/3196961-1%20wolverine.jpg'
                alt='Project image'
                initial={{
                  y: -300,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              />

              <div className='space-y-10 px-0 md:px-10 mas-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Case study {i + 1} of {projects.length}:
                  </span>{" "}
                  UPS clone
                </h4>

                <p className='text-lg text-center md:text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl neque, gravida id magna eu, mollis eleifend orci. Donec nibh lorem, efficitur at felis et, placerat lacinia erat. Maecenas nec nibh quis felis lobortis convallis. Sed semper placerat nunc ut commodo. Praesent est dui, ultricies ac nulla eu.
                </p>
              </div>

            </motion.div>
          ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

      </div>
      
    </motion.div>
  )
}
