import React, {useState} from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    
    function linkedIn() {
        window.open("http://www.seznam.cz", "_blank")
    }

    return (
      <div name='navbar' className='fixed w-full h-[200px] mx-auto px-8 bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='flex flex-row ml-[5%]'>
            
            <div className='w-[80] h-[160px] flex flex-row mt-[-100px] hover:mt-[0px] duration-300 bg-blue-600'>
            <button onClick={linkedIn}>
                <div className=' mt-[20%] ml-[20%]'>
                    <p className='py-5'>LinkedIn</p>
                </div>
                <div className='mt-[110px] ml-[-50%]'>
                        <FaLinkedin size={30}/>
                </div>
            </button>
            </div>

            <div className='w-[80] h-[160px] flex flex-row mt-[-100px] hover:mt-[0px] duration-300 bg-[#333333]'>
                <div className=' mt-[20%] ml-[20%]'>
                    <p className=''>GitHub</p>
                </div>
                <div className='mt-[110px] ml-[-50%]'>
                        <FaGithub size={30}/>
                    <a href="/">
                    </a>
                </div>
            </div>

            <div className='w-[80] h-[160px] flex flex-row mt-[-100px] hover:mt-[0px] duration-300 bg-[#6fc2b0]'>
                <div className=' mt-[20%] ml-[20%]'>
                    <p className='py-5'>Email</p>
                </div>
                <div className='mt-[110px] ml-[-50%]'>
                        <HiOutlineMail size={30}/>
                    <a href="/">
                    </a>
                </div>
            </div>

            <div className='w-[80] h-[160px] flex flex-row mt-[-100px] hover:mt-[0px] duration-300 bg-blue-300'>
                <div className=' mt-[20%] ml-[20%]'>
                    <p className='py-5'>Resume</p>
                </div>
                <div className='mt-[110px] ml-[-50%]'>
                        <BsFillPersonLinesFill size={30}/>
                    <a href="/">
                    </a>
                </div>
            </div>

            <div className='w-[80] h-[160px] flex flex-row mt-[-100px] hover:mt-[0px] duration-300 bg-red-600'>
                <div className=' mt-[20%] ml-[20%]'>
                    <p className='py-5'>YouTube</p>
                </div>
                <div className='mt-[110px] ml-[-50%]'>
                        <FiYoutube size={30}/>
                    <a href="/">
                    </a>
                </div>
            </div>

        </div>
      </div>
    )
}

export default Navbar