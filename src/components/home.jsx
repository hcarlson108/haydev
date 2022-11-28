import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#457b9d]'>
      {/* Greeting */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
        <h1 className='text-4xl sm:text-8xl'>Hayden Carlson</h1>
        <h2 className='text-4xl sm:text-5xl'>Full Stack Developer</h2>
        <p className='text-4xl sm:text-3xl'>
          Pushing my limits daily to infinity and beyond...
        </p>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-black hover:text-black'>
            Peep
            <span>
              <HiArrowRight
                size={20}
                className='group-hover:ml-3 group-hover:rotate-90 duration-300'
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
