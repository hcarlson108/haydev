import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HioutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/haydev.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[90px] flex justify-between px-4 bg-[#212529] text-[#ffffff] font-sans'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '150px'}} />
        </div>

        {/* menu */}
            <ul className='hidden md:flex py-8 text-lg '>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 p-9 scale-150'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#343A40] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li>
                <a href="/">
                    LinkedIn <FaFacebook size={30}/>
                </a>
            </li>
        </ul>

        </div>

    </div>
  );
};

export default Navbar