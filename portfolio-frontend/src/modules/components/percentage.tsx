import React from 'react'

export default function Percentage() {
  return (
    <div className='flex flex-col'>
      <p className='text-white font-semibold '>English <span className='text-neutral-300 font-normal mb-2'>%80</span></p>
      <div className='w-full p-1 rounded-full bg-neutral-600'>
        <div className='p-[5px] w-1/2 h-full rounded-full bg-gradient-to-br from-yellow-200 to-amber-400'></div>
      </div>
    </div>
  )
}
