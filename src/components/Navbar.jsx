import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items center px-4 bg-[#0D1B2A] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>

        <div></div>

    </div>
  );
};

export default Navbar