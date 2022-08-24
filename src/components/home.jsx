import React from 'react'

const home = () => {
  return (
    <div name='home' className='w-full h-screen  bg-gray-200'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  '>
            <p className='text-blue-400'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl  text-[#555555]'>Roman Liewehr </h1>
            <h2 className='text-2xl sm:text-5xl  text-[#8892b0]'> I'm a tech enthusiast and programmer</h2>
            <p className=' text-[#333333] py-4 max-w max-w-[700px]'>A recent graduate from University of Brighton, awarded with first class honours degree from Computer Science with 
              specialisation for Video Games industry. Currently being employed by Brighton based company called Paxton Access producing hardware and software
              in security and access control industry.</p>
        </div>
    </div>
  )
}

export default home