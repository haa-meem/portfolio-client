import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <>
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
                            <button className="btn" onClick={() => openModal(project.id)}>Details</button>
                            <dialog id={project.id} className="modal modal-bottom sm:modal-middle">
                                <form method="dialog" className="modal-box">
                                    <h3 className="font-bold text-lg">Features
                                    </h3>
                                    <p className="py-4">Recipe database: The website contains a large collection of Chinese recipes from various chefs. Users can search for recipes by cuisine, ingredient, or chef.
                                        Chef profiles: Each chef has a profile page that includes their bio, photo, and a list of their recipes. Users can follow their favorite chefs to stay updated on their latest creations.
                                        Recipe ratings and reviews: Users can rate and review recipes to share their feedback with other users. This helps to promote the best recipes and encourages chefs to improve their cooking.
                                        Recipe sharing: Chefs can easily upload their own recipes to the website, including photos and step-by-step instructions. This helps to grow the recipe database and allows chefs to showcase their skills.
                                        Mobile-friendly: The website is optimized for mobile devices, so users can easily access it from their smartphones or tablets.
                                        Technologies</p>
                                    <h3 className="font-bold text-lg">
                                        The website is built using the following technologies:
                                    </h3>
                                    <p className="py-4">
                                        Front-end: React, Bootstrap
                                        Back-end: Firebase</p>
                                    <div className="modal-action">
                                        <button className="btn" onClick={() => closeModal(project.id)}>Close</button>
                                    </div>
                                </form>
                            </dialog>
                            <div className="card-actions">
                                <Link target="_blank" to={project.client}><button className="btn btn-outline btn-info btn-xs sm:btn-sm lg:btn">Server Side</button></Link>
                                <Link target="_blank" to={project.server}><button className="btn btn-outline btn-success btn-xs sm:btn-sm lg:btn">Client Side</button></Link>
                                <Link target="_blank" to={project.live}><button className="btn btn-outline btn-warning btn-xs sm:btn-sm lg:btn">Live Link</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
