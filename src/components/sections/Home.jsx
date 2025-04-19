import React from 'react'

const Home = () => {
  return (
    <section
    id='home'
    className='min-h-screen flex items-center justify-center relative'
    >
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right'>
                Hi, I'm Ayush Ranjan
            </h1>

            <p>
                I'm a passionate and aspiring full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
            </p>
        </div>
    </section>
  )
}

export default Home