import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaInfo } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    const openModal = (id) => {
        const modal = document.getElementById(id);
        modal.showModal();
    };

    const closeModal = (id) => {
        const modal = document.getElementById(id);
        modal.close();
    };

    return (
        <div id="projects">
            <h1 className="text-center font-bold text-5xl my-3">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-3">
                {projects.map((project) => (
                    <div key={project.id} className="card w-11/12 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-5 pt-5">
                            <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                <div className="h-max w-full transition-transform duration-[2000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                    <img
                                        src={project.image}
                                        alt=""
                                        className="w-full object-cover object-top rounded-lg"
                                    />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <button className="btn" onClick={() => openModal(project.id)}><FaInfo></FaInfo>Details</button>
                            <dialog id={project.id} className="modal modal-bottom sm:modal-middle">
                                <form method="dialog" className="modal-box">
                                    <h3 className="font-bold text-2xl">Features
                                    </h3>
                                    <ul className="list-disc ml-6 text-left">
                                        {project.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                    <h3 className="font-bold text-xl">
                                        Technologies
                                    </h3>
                                    <ul className="list-disc text-left ml-6">
                                        {project.technologies.map((technology, index) => (
                                            <li key={index}>{technology}</li>
                                        ))}
                                    </ul>
                                    <div className="modal-action">
                                        <button className="btn" onClick={() => closeModal(project.id)}>Close</button>
                                    </div>
                                </form>
                            </dialog>
                            <div className="card-actions">
                                <Link target="_blank" to={project.client}><button className="btn btn-outline btn-info btn-xs sm:btn-sm"><FaGithub></FaGithub>Client Side</button></Link>
                                <Link target="_blank" to={project.server}><button className="btn btn-outline btn-success btn-xs sm:btn-sm"><FaGithub></FaGithub>Server Side</button></Link>
                                <Link target="_blank" to={project.live}><button className="btn btn-outline btn-warning btn-xs sm:btn-sm"><FaExternalLinkAlt></FaExternalLinkAlt>Live Link</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
