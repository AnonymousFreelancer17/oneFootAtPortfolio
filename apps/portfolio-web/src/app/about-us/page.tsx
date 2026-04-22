"use client";

import React from 'react'

const page = () => {
  return (
    <div  className='w-screen flex flex-col justify-center items-center'>
        <div className='h-screen w-full bg-red-400 flex justify-center items-center text-6xl' id='landing'>Landing</div>
        <div className='h-screen w-full bg-blue-400 flex justify-center items-center text-6xl' id='skills'>skills</div>
        <div className='h-screen w-full bg-green-400 flex justify-center items-center text-6xl' id='operating'>operating</div>
        <div className='h-screen w-full bg-violet-400 flex justify-center items-center text-6xl' id='aboutUs'>aboutUs</div>
        <div className='h-screen w-full bg-purple-400 flex justify-center items-center text-6xl' id='feedback'>feedback</div>
        <div className='h-screen w-full bg-yellow-400 flex justify-center items-center text-6xl' id='carrer'>carrer</div>
        <div className='h-screen w-full bg-orange-400 flex justify-center items-center text-6xl' id='contactUs'>contactUs</div>

    </div>
  )
}

export default page