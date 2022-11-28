import React from 'react';
function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#f1faee]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-400'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-left text-4xl font-bold'>
            <p>Yo, I'm Hayden, nice to meet you, Please take a loogaroun</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam sit in odio totam quaerat. Consequatur recusandae
              eligendi laborum, dicta quis delectus voluptatibus impedit ut
              aliquid non. Recusandae nulla necessitatibus iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
