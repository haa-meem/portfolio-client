import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DownloadResume from './DownloadResume';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="banner">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row items-center justify-center">
                    <div data-aos="fade-right" data-aos-duration="2000" className="flex justify-center lg:justify-start">
                        <img src="Haa-meem.png" className="max-w-sm w-full lg:w-auto rounded-lg shadow-2xl mb-8 lg:mb-0" alt="Profile" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl lg:text-5xl font-semibold mb-4">
                                I'm a{' '}
                                <span className="font-bold text-3xl lg:text-5xl text-amber-500">
                                    <Typewriter
                                        words={['Full Stack Developer!', 'MERN Stack Developer!', 'React Developer!', 'Junior Web Developer!']}
                                        loop={true}
                                        cursor
                                        cursorColor="black"
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                            <p className="text-base lg:text-lg text-gray-700 mb-6">
                                Passionate, curious, and dedicated learner. Skilled in full-stack development, with expertise in the MERN stack. Always striving to expand knowledge and create meaningful solutions.
                            </p>
                            <DownloadResume />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
