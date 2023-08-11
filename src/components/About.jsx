import React from 'react';
import react from '../assets//react.svg';

const About = () => {
    return (
        <section id="about" className="py-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
                <div className="lg:w-1/3 lg:pr-10 flex justify-center items-center xs:mb-6">
                    <img
                        src={react}
                        alt="Your Photo"
                        className="rounded-full w-48 h-48  mx-auto lg:mx-0"
                    />
                </div>
                <div className="lg:w-2/3">
                    <h2 className="text-3xl font-bold mb-7 text-blue-500">About Me</h2>
                    <p className="text-lg text-white mb-4">
                        Hello, I'm Indra Bagus Syah Putra. Hailing from East Java, Indonesia, I'm currently 20 years old. I'm a student majoring in Computer Engineering at the State Polytechnic of Jember.
                    </p>
                    <p className="text-lg text-white mb-4">
                        I possess a strong passion for the world of technology and programming. <span className='text-blue-400'>I often work as a freelance programmer, taking on engaging projects that involve software development. Beyond the realm of technology</span>.
                    </p>
                    <p className="text-lg text-white ">
                        When I'm not at the computer, I usually play football as my hobby and hanging out with my friends.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
