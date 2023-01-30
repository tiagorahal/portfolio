import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='rounded-full border border-[#333333] h-[200px] w-[200px] absolute mt-52 animate-ping' />
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52' />
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52' />
      <div className='rounded-full border border-[#F7AB0A] h-[650px] w-[650px] absolute mt-52 animate-pulse opacity-20' />
      <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52' />
      <div />
    </div>
  )
}

export default BackgroundCircles