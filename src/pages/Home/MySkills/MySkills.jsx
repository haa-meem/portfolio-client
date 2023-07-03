import { useEffect, useState } from "react";
import { Img } from "react-image";
import AOS from "aos";
import "aos/dist/aos.css";

const MySkills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("skills.json")
            .then((res) => res.json())
            .then((data) => setSkills(data));
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="skills">
            <h1 className="text-center font-bold text-5xl my-5">My Skills</h1>
            <ul className="grid grid-cols-3 gap-4 mx-3 mb-3">
                {skills.map((skill, index) => (
                    <li
                        key={skill.id}
                        className="p-4 bg-white rounded-lg shadow"
                        data-aos="fade-up"
                        data-aos-delay={100 * index}
                    >
                        <Img
                            src={skill.image}
                            alt={`Skill ${skill.id}`}
                            className="w-24 h-24 mx-auto object-contain"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MySkills;
