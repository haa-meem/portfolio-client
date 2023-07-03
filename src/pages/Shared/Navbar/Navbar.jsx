import { Link } from "react-scroll";

const Navbar = () => {

    const navLists = <>
        <li><Link to="banner" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
        <li><Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Me</Link></li>
    </>

    return (
        <>
            <div className="navbar bg-black fixed z-10 bg-opacity-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLists}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Haa-meem</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLists}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Hire Me!</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;