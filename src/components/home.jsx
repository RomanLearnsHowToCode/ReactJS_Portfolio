import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

/*bg-[#0a192f]*/
const home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p>Hi, my name is </p>
            <h1>Roman Liewehr </h1>
            <p>I'm a tech enthusiast and programmer</p>
            <div>
                <button>View Work <HiArrowNarrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default home