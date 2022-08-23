import React from 'react'

/*bg-[#0a192f]*/
const home = () => {
  return (
    <div name='home' className='w-full h-screen pt-52 bg-black no-scrollbar overflow-y-auto'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto my-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Roman Liewehr </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I'm a tech enthusiast and programmer</h2>
            <p className=' text-[#8892b0] py-4 max-w max-w-[700px]'>A recent graduate from University of Brighton, awarded with first class honours degree from Computer Science with 
              specialisation for Video Games industry. Currently being employed by Brighton based company called Paxton Access producing hardware and software
              in security and access control industry.</p>
        </div>
    </div>
  )
}

export default home