import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaMailBulk,
} from 'react-icons/fa';
import { HiMail, HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsArrowBarRight } from 'react-icons/bs';
import Logo from '../assets/haydev.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [flags, setFlags] = useState(false);
  const clickHander = () => setFlags(!flags);

  return (
    <div className='fixed w-full h-[90px] flex justify-between px-4 bg-[#1d3557] text-[#ffffff] font-sans'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '150px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex py-8 text-lg'>
        <li className='hover:text-[#DEE2E6]'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-[#DEE2E6]'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-[#DEE2E6]'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-[#DEE2E6]'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 p-9 scale-125'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#343A40] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:ml-10'>Home</li>
        <li className='py-6 text-4xl hover:ml-10'>About</li>
        <li className='py-6 text-4xl hover:ml-10'>Contact</li>
      </ul>

      {/* flags */}
      <div
        onClick={clickHander}
        className={
          !flags
            ? 'flex fixed flex-col top-[41%] left-0'
            : 'flex fixed flex-col top-[31%] left-14'
        }
      >
        {!flags ? <BsArrowBarRight size={40} /> : <FaTimes size={25} />}
        <div
          className={
            !flags ? 'hidden' : 'hidden lg:flex fixed flex-col top-[35%] left-0'
          }
        >
          <ul>
            <li
              className={
                'w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#3f88c5]'
              }
            >
              <a
                className='flex justify-between items-center w-full text-[#F8F9FA]'
                href='/'
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li
              className={
                'w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-black'
              }
            >
              <a
                className='flex justify-between items-center w-full text-[#F8F9FA]'
                href='/'
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li
              className={
                'w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#d00000]'
              }
            >
              <a
                className='flex justify-between items-center w-full text-[#F8F9FA]'
                href='/'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li
              className={
                'w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#ffba08]'
              }
            >
              <a
                className='flex justify-between items-center w-full text-[#F8F9FA]'
                href='/'
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
