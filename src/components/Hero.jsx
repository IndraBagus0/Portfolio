import React from 'react';
import { motion } from 'framer-motion';
import quote from '../assets/herobg.webp';
import styles from '../style';
import { github, twitter, linkedin, instagram } from '../assets/icons/index';

const Hero = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '-10%', // Bergerak ke kiri
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
                duration: 1.5,
            },
        },
    };

    const reverseContainerVariants = {
        hidden: {
            opacity: 0,
            x: '10%', // Bergerak ke kanan
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
                duration: 1.5,
            },
        },
    };

    return (
        <section id="home" className={`flex md:flex-row flex-col md:py-24 ${styles.paddingY}`}>
            <motion.div
                className={`flex-1 ${styles.flexStart} flex-col  xs:py-3 `}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className={`flex-1 ${styles.flexStart} flex-col  xs:py-3 `}>
                    <div className=" justify-between items-center w-full">
                        <strong className="text-2xl xs:text-5xl sm:text-6xl lg:text-7xl mb-2 block">Hi There</strong>
                        <span className=" font-semibold text-xl xs:text-2xl sm:text-3xl md:text-4xl block mb-2 md:mb-4 md:my-6">
                            I'm <span className='text-blue-500'>Indra</span> Bagus Syah Putra
                        </span>
                        <span className="text-lg md:text-xl">I'm a Fullstack Website Developer</span>
                        <div className="mt-8 md:mt-12">
                            <a href="#contact" className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full hover:bg-blue-600 text-sm md:text-xl">
                                Hire Me
                            </a>
                        </div>
                    </div>
                    <ul className={`${styles.paragraph} max-w-[470px] flex justify-center items-center gap-6 mt-16 `}>
                        <li>
                            <a href="https://github.com/IndraBagus0" target='_blank'>
                                <img src={github} alt="" className='h-6 w-6' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/indra-bagus-syah-putra-845025278/" target='_blank'>
                                <img src={linkedin} alt="" className='h-6 w-6' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ndraabagus/" target='_blank'>
                                <img src={instagram} alt="" className='h-6 w-6' />
                            </a>
                        </li>
                        <li>
                            <a href="" target='_blank'>
                                <img src={twitter} alt="" className='h-6 w-6' />
                            </a>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <motion.div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
                initial="hidden"
                animate="visible"
                variants={reverseContainerVariants}
            >
                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 xs:h-auto relative`}>
                    <img src={quote} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                </div>
                <div className={`ss:hidden ${styles.flexCenter}`}>
                </div>
            </motion.div>
        </section>

    );
};

export default Hero;
