import React from 'react'
import { php, js, html, css, java, python, dart, flutter } from "../assets/skiils"
const Skills = () => {
    return (
        <section id="skills" className=" py-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className=''>
                    <p className='mb-5 '>Language</p>
                    <div className='flex'>
                        <div className='flex justify-center items-center mr-3 gap-3 mb-2'>
                            <img src={php} alt="" className='w-10 h-10 hover:shadow-2xl cursor-pointer' />
                            <p>Php</p>
                        </div>
                        <div className='flex justify-center items-center mr-3 gap-3 mb-2'>
                            <img src={js} alt="" className='w-10 h-10 hover:shadow-2xl cursor-pointer' />
                            <p>javaScript</p>
                        </div>
                        <div className='flex justify-center items-center mr-3 gap-3 mb-2'>
                            <img src={html} alt="" className='w-10 h-10 hover:shadow-2xl cursor-pointer' />
                            <p>Html 5</p>
                        </div>
                        <div className='flex justify-center items-center mr-3 gap-3 mb-2'>
                            <img src={css} alt="" className='w-10 h-10 hover:shadow-2xl cursor-pointer' />
                            <p>CSS 3</p>
                        </div>
                        <div className='flex justify-center items-center mr-3 gap-3 mb-2'>
                            <img src={java} alt="" className='w-10 h-10 hover:shadow-2xl cursor-pointer' />
                            <p>java</p>
                        </div>
                        <div className='flex justify-center items-center mr-3 gap-3 mb-2'>
                            <img src={python} alt="" className='w-10 h-10 hover:shadow-2xl cursor-pointer' />
                            <p>Python</p>
                        </div>
                        <div className='flex justify-center items-center mr-3 gap-3 mb-2'>
                            <img src={dart} alt="" className='w-10 h-10 hover:shadow-2xl cursor-pointer' />
                            <p>Dart</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Framework</p>
                </div>
                <div>
                    <p>library</p>
                </div>
                <div>
                    <p>Database</p>
                </div>
            </div>
        </section>
    )
}

export default Skills