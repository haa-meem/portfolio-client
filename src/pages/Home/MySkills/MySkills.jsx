import { useEffect, useState } from "react";
import { Img } from "react-image";

const MySkills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('skills.json')
            .then((res) => res.json())
            .then((data) => setSkills(data));
    }, []);

    return (
        <div id="skills">
            <h1 className="text-center font-bold text-5xl my-3">My Skills</h1>
            <ul className="grid grid-cols-3 gap-4 mx-3 mb-3">
                {skills.map((skill) => (
                    <li key={skill.id} className="p-4 bg-white rounded-lg shadow">
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
