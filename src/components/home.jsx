import React from 'react'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#adb5bd]'>


        {/* {container} */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
            <h1 className='text-4xl sm:text-8xl'>Hayden Carlson</h1>
            <h2 className='text-4xl sm:text-5xl'>Full Stack Developer</h2>
    
            <p className='text-4xl sm:text-3xl'>Pushing my limits daily to 
            infinity and beyond...
        </p>
        
        </div>
    </div>
  )
}

export default Home