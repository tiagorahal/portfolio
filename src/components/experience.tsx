/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'

import Easyb2b from '../../public/easyb2b.jpeg'
import Tabas from '../../public/tabas.png'
import Plathanus from '../../public/plathanus.jpeg'
import Microverse from '../../public/microverse.png'
import NovaInteligencia from '../../public/novainteligencia.png'
import Romagnole from '../../public/romagnole.jpg'
import Prefeitura from '../../public/prefeitura.jpeg'

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

        {/* EASYB2B */}
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
              src={Ruby.src}
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
            <motion.img
              className='h-8 w-8 rounded-full'
              src={MySql.src}
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

        {/* TABAS */}
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
            src={Tabas.src}
            alt='Card image'
          />

          <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Full Stack Developer</h4>
            <p className='font-bold text-1xl mt-1'>Tabas</p>
          </div>
          <div className='flex space-x-2 my-2'>
            <motion.img
              className='h-8 w-8 rounded-full'
              src={RoR.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Ruby.src}
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
              src={Docker.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Postgres.src}
              alt='Skill icon'
            />
          </div>
          <p className='uppercase py-1 text-gray-300'>STARTED 04/2022 - ENDED 02/2023</p>
          
          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Develop important features regarding the client experience.</li>
            <li>Maintaining the user experience at its peak.</li>
            <li>Maintain the backoffice</li>
          </ul>
        </article>

        {/* Plathanus */}
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
            src={Plathanus.src}
            alt='Card image'
          />

          <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Full Stack Developer</h4>
            <p className='font-bold text-1xl mt-1'>Plathanus</p>
          </div>
          <div className='flex space-x-2 my-2'>
            <motion.img
              className='h-8 w-8 rounded-full'
              src={RoR.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Ruby.src}
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
              src={Docker.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Postgres.src}
              alt='Skill icon'
            />
          </div>
          <p className='uppercase py-1 text-gray-300'>STARTED 04/2022 - ENDED 02/2023</p>
          
          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Outsourced for Tabas</li>
          </ul>
        </article>

        {/* Microverse */}
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
            src={Microverse.src}
            alt='Card image'
          />

          <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Full Stack Code Reviwer</h4>
            <p className='font-bold text-1xl mt-1'>Microverse</p>
          </div>
          <div className='flex space-x-2 my-2'>
            <motion.img
              className='h-8 w-8 rounded-full'
              src={RoR.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Ruby.src}
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
              src={MySql.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Postgres.src}
              alt='Skill icon'
            />
          </div>
          <p className='uppercase py-1 text-gray-300'>STARTED 03/2021 - ENDED 02/2022</p>
          
          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Analyze and correct, if necessary, other students' codes.</li>
            <li>Stay updated on all the stacks the course has to offer.</li>
          </ul>
        </article>

        {/* Nova Inteligencia */}
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
            src={NovaInteligencia.src}
            alt='Card image'
          />

          <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Junior Full Stack Developer</h4>
            <p className='font-bold text-1xl mt-1'>Nova Inteligencia</p>
          </div>
          <div className='flex space-x-2 my-2'>
            <motion.img
              className='h-8 w-8 rounded-full'
              src={RoR.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Ruby.src}
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
              src={MySql.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={PHP.src}
              alt='Skill icon'
            />
          </div>
          <p className='uppercase py-1 text-gray-300'>STARTED 09/2020 - ENDED 02/2021</p>
          
          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Upgraded and maintained e-commerces for a variety of big and small companies.</li>
            <li>Was responsible for all the servers containing the client websites and apps.</li>
            <li>Communicate and understand the client's needs and apply that to the e-commerce of the client.</li>
          </ul>
        </article>

        {/* Romagnole */}
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
            src={Romagnole.src}
            alt='Card image'
          />

          <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Junior Full Stack Developer</h4>
            <p className='font-bold text-1xl mt-1'>Romagnole</p>
          </div>
          <div className='flex space-x-2 my-2'>
            <motion.img
              className='h-8 w-8 rounded-full'
              src={RoR.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Ruby.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Javascript.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={MySql.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Java.src}
              alt='Skill icon'
            />
          </div>
          <p className='uppercase py-1 text-gray-300'>STARTED 12/2019 - ENDED 03/2020</p>
          
          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Maintaining the internal system used by all the employees.</li>
            <li>Identified the major system expenses of the biggest energy company in Mandaguari and region.</li>
          </ul>
        </article>

        {/* PRefeitura de mandaguari*/}
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
            src={Prefeitura.src}
            alt='Card image'
          />

          <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Junior Full Stack Developer</h4>
            <p className='font-bold text-1xl mt-1'>Prefeitura de Mandaguari</p>
          </div>
          <div className='flex space-x-2 my-2'>
            <motion.img
              className='h-8 w-8 rounded-full'
              src={RoR.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Ruby.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Javascript.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={MySql.src}
              alt='Skill icon'
            />
            <motion.img
              className='h-8 w-8 rounded-full'
              src={Java.src}
              alt='Skill icon'
            />
          </div>
          <p className='uppercase py-1 text-gray-300'>STARTED 7/2018 - ENDED 12/2019</p>
          
          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Maintaining the internal system used by the public school students.</li>
            <li>Help to improve the student's experiences.</li>
          </ul>
        </article>
      </div>
    </motion.div>
  )
}