import React from 'react'

export default function ProjectLayout() {
  return (
    <nav className='flex gap-8 p-3'>
        <button className="text-white p-2 font-semibold hover:text-yellow-200">All</button>
        <button className="text-white p-2 font-semibold hover:text-yellow-200">Applications</button>
        <button className="text-white p-2 font-semibold hover:text-yellow-200">Web Development</button>
        <button className="text-white p-2 font-semibold hover:text-yellow-200">Mobile Development</button>

    </nav>
  )
}
