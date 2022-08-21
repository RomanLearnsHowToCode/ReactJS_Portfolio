import React from 'react'
{/* IMPORT IMAGES HERE*/}

const skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 '>List skills here.. pictures etc</h1>
                <p className=' py-4'>// These are the technologies I've worked with</p>
            </div>
        
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* images here className=w-20 mx-auto src={picture name} alt="picture icon*/}
                    <p className='my-4'>IMG NAME</p>
                </div>
            
                <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* images here className=w-20 mx-auto src={picture name} alt="picture icon*/}
                    <p className='my-4'>IMG NAME</p>
                </div>
            
                <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* images here className=w-20 mx-auto src={picture name} alt="picture icon*/}
                    <p className='my-4'>IMG NAME</p>
                </div>
            
                <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* images here className=w-20 mx-auto src={picture name} alt="picture icon*/}
                    <p className='my-4'>IMG NAME</p>
                </div>

                <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* images here className=w-20 mx-auto src={picture name} alt="picture icon*/}
                    <p className='my-4'>IMG NAME</p>
                </div>
            
                <div className='shadow:md shadow-[#040c16] hover:scale-110 duration-500'>
                    {/* images here className=w-20 mx-auto src={picture name} alt="picture icon*/}
                    <p className='my-4'>IMG NAME</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default skills