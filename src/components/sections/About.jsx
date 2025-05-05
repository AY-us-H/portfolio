import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

const About = () => {
    const frontendSkills = ["HTML","CSS","Javascript", "ReactJS", "NextJS", "Tailwindcss"]
    const backendSkills = ["NodeJS", "ExpressJS", "MongoDB", "MySQL", "Git"]
  return (
    <section 
    id='about' 
    className='min-h-screen flex items-center justify-center py-20'
    >
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                {" "}
                About Me
            </h2>

            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6'>
                    Passionate Developer with  Experience in Frontend Development and aspiring Full-stack developer. I have a strong passion for learning and improving my skills in the field of web development. I am a quick learner and a team player.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {frontendSkills.map((tech, key)=>(
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Backend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {backendSkills.map((tech, key)=>(
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Education</h3>
                    <ul className='list-disc list-inside text-gray-300 space-y-2'>
                        <li>
                            <strong>B.E in Information Science & Engineering</strong> - NMAMIT (2020-2024)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Algorithms, Computer Networks, Database Systems, Web Development, and Operating Systems.
                        </li>
                    </ul>
                    </div>

                    <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
                    <div>
                        <p>I am actively seeking opportunities where I can contribute meaningfully while continuously learning and evolving. With a strong drive to upskill, I embrace challenges that push me beyond my comfort zone and help me grow both personally and professionally. My goal is to be part of a team where I can make an impact, share ideas, and thrive in a culture of innovation and collaboration.</p>
                    </div>
                    </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About