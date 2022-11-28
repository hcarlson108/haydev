import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import AWS from '../assets/aws.png';
import Tailwind from '../assets/tailwind.png';
import NodeImg from '../assets/node.png';
import FireImg from '../assets/firebase.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f1faee]'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <p>Experience</p>
          <p className='text-4xl font-bold inline border-b-4 border-[#1d3557]'>
            Skills
          </p>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
