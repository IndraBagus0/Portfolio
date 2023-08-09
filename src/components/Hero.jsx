import React from 'react';
import quote from '../assets/herobg.webp';
import styles from '../style';

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className=" justify-between items-center w-full">
                    <strong className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl block">Hi There 👋</strong>
                    <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl block mb-2 md:mb-4 lg:mb-6">
                        I'm Indra Bagus Syah Putra
                    </span>
                    <span className="text-lg md:text-xl">I'm a Website Developer</span>
                    <div className="mt-8 md:mt-12">
                        <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-sm md:text-xl">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className={`${styles.paragraph} max-w-[470px]  mt-10 `}>
                    icon Social Media
                </div>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={quote} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            </div>
            <div className={`ss:hidden ${styles.flexCenter}`}>
            </div>
        </section>
    );
};

export default Hero;