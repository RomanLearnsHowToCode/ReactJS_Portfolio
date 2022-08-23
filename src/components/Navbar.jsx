import React, {useState, useEffect} from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    
    function linkedIn() {
        window.open("http://www.seznam.cz", "_blank")
    }

    function github() {
        window.open("https://github.com/RomanLearnsHowToCode/", "_blank")
    }

    function email() {
        window.open('mailto:roman.liewehr@hotmail.com?subject=I have visited your portfolio')
    }

    function resume() {
        window.open("reume_link", "_blank")
    }

    function youtube() {
        window.open("youtube_link", "_blank")
    }

    return (
      <div name='navbar' className='fixed w-full h-[200px] mx-auto px-8 bg-[#e6e6e6] text-gray-300 text-bold no-scrollbar overflow-y-auto'>

        {/* Main navbar */}
        <div className='w-full h-[200px] flex flex-row justify-center'>

            <div className='w-[80] h-[160px] mt-[-100px] hover:mt-[0px] duration-300 bg-blue-600'>
            <button onClick={linkedIn}>
                <div>
                    <p className='py-10'>LinkedIn</p>
                </div>
                <div className='px-5'>
                        <FaLinkedin size={30}/>
                </div>
            </button>
            </div>

            <div className='w-[80] h-[160px] mt-[-100px] hover:mt-[0px] duration-300 bg-[#333333]'>
                <button onClick={github}>
                    <div>
                        <p className='py-10'>GitHub</p>
                    </div>
                    <div className='px-5'>
                        <FaGithub size={30}/>
                    </div>
                </button>
            </div>

            <div className='w-[80] h-[160px] mt-[-100px] hover:mt-[0px] duration-300 bg-[#6fc2b0]'>
                <button onClick={email}>
                    <div>
                        <p className='py-10'>Email</p>
                    </div>
                    <div className='px-5'>
                        <HiOutlineMail size={30}/>
                    </div>
                </button>
            </div>

            <div className='w-[80] h-[160px] mt-[-100px] hover:mt-[0px] duration-300 bg-blue-300'>
                <button onClick={resume}>
                    <div>
                        <p className='py-10'>Resume</p>
                    </div>
                    <div className='px-5'>
                        <BsFillPersonLinesFill size={30}/>
                    </div>
                </button>
            </div>

            <div className='w-[80] h-[160px] mt-[-100px] hover:mt-[0px] duration-300 bg-red-600'>
                <button onClick={youtube}>
                    <div>
                        <p className='py-10'>YouTube</p>
                    </div>
                    <div className='px-5'>
                        <FiYoutube size={30}/>
                    </div>
                </button>
            </div>

        </div>

      </div>
    )
}

export default Navbar