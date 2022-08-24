import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] bg-gray-100 flex justify-between items-center px-4 text-[#333333]'>

        {/* menu */}
        <div className='hidden md:flex items-center'>
            <div className='flex flex-row justify-between'>
                
                <div className='ml-[100px]'><a href="/">Home</a></div>
                <div className='ml-[100px]'>About</div>
                <div className='ml-[100px]'>Skills</div>
                <div className='ml-[100px]'>Experience</div>
            </div>
        </div>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 items-center'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0  w-full h-screen flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li> 
            </ul>
        </div>
    
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                    <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
                    <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
                    <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-400'>
                    <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-red-600'>
                    <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                        YouTube <AiOutlineYoutube size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar