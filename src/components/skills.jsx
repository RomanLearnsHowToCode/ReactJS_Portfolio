import React from 'react'

const skills = () => {
  return (
    <div className='grid place-items-center min-h-screen'>
        {/* container */}
  <div className="p-4 max-w-5xl grid gap-4 sm:grid-cols-2 sm:p-8 md:grid-cols-4 lg:gap-6">
    <h1 className="text-4xl font-extrabold sm:col-span-2 sm:grid sm:gap-4 sm:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl">
      <span className="md:col-span-2">Grid layout with Tailwind CSS.</span>
    </h1>
    <p className="sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic itaque alias officiis.</p>
    <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
    <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
    <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
    <div className="h-16 bg-blue-500 sm:h-auto sm:square md:col-start-2"></div>
    <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
    <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
    <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
    <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
    <p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit, and some more.</p>
  </div>
    </div>
  )
}

export default skills