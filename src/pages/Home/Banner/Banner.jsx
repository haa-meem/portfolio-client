import DownloadResume from "./DownloadResume";
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div id='banner'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="Haa-meem.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="font-semibold text-5xl">
                            I'm a {' '}
                            <span className="font-bold text-5xl text-amber-500">
                                <Typewriter
                                    words={['Full Stack Developer!', 'MERN Stack Developer!', 'React Developer!', 'Junior Web Developer!']}
                                    loop={true}
                                    cursor
                                    cursorColor="black"
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className="py-6">Passionate, curious, and dedicated learner. Skilled in full-stack development, with expertise in the MERN stack. Always striving to expand knowledge and create meaningful solutions.</p>
                        <DownloadResume />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;