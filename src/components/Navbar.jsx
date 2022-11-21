import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/haydev.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav = (!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items center px-4 bg-[#161616] text-[#ffffff]'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '150px'}} />
        </div>
            <ul className='hidden md:flex py-8'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 py-8'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#161616] flex flex-col justify-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden'></div>

    </div>
  );
};

export default Navbar