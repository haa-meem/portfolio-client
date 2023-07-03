import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div id='about'>
            <h1 className="text-center font-bold text-5xl my-3">About Me</h1>
            <div className="bg-gray-100 mx-3 p-5 rounded-3xl">
                <h1 className="font-bold my-3 mx-3"><span className="text-2xl">Hi, I'm</span><br /><span className="text-4xl text-amber-500">Haa-meem Al Hamra</span></h1>
                <p className="mx-3 text-lg">I am a passionate and dedicated individual with a strong interest in technology and software development. With a background in full-stack development, I have honed my skills in the MERN (MongoDB, Express.js, React.js, Node.js) stack. I thrive on learning new technologies and staying up-to-date with industry trends. I enjoy working on challenging projects that require problem-solving and creative thinking. My goal is to create efficient and user-friendly applications that provide value to users. Alongside technical expertise, I value collaboration, communication, and teamwork. I am constantly seeking opportunities to grow both professionally and personally, always eager to take on new challenges and expand my knowledge base.</p>
                <div className="mt-1 text-center">
                    <Link target="_blank" to="https://github.com/haa-meem"><button className="btn btn-outline btn-xs sm:btn-sm me-1"><FaGithub></FaGithub>GitHub</button></Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/haa-meem/"><button className="btn btn-outline btn-primary btn-xs sm:btn-sm me-1"><FaLinkedin></FaLinkedin>LinkedIn</button></Link>
                    <Link target="_blank" to="https://www.facebook.com/AlHamraHaa.meem/"><button className="btn btn-outline btn-info btn-xs sm:btn-sm me-1"><FaFacebook></FaFacebook>Facebook</button></Link>
                    <Link target="_blank" to="https://www.instagram.com/haameemalhamra/"><button className="btn btn-outline btn-secondary btn-xs sm:btn-sm"><FaInstagram></FaInstagram>Instagram</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;