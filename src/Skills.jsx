import { useState } from "react";
import Heading from "./Heading";
import SkillSets from "./SkillSets";
function Skills({skillRef,focusedSection}) {
    const [core] = useState([
        { id: 1, coreName: "Frontend", setSkills: [{ id: 1, name: "HTML" }, { id: 2, name: "CSS" }, { id: 3, name: "LESS" }, { id: 4, name: "JavaScript" }, { id: 5, name: "jQuery" }, { id: 6, name: "React JS" }] },
        { id: 2, coreName: "UIUX & Design", setSkills: [{ id: 1, name: "Figma" }, { id: 2, name: "Wireframing" }, { id: 3, name: "Prototyping" }, { id: 4, name: "Responsive Design" }] },
        { id: 3, coreName: "Tools", setSkills: [{ id: 1, name: "GitHub" }, { id: 2, name: "VS Code" }, { id: 3, name: "Chrome DevTools" }, { id: 4, name: "Postman" }] },
        { id: 4, coreName: "Testing", setSkills: [{ id: 1, name: "Manual Testing" }, { id: 2, name: "Unit Testing" }, { id: 3, name: "Test Case Writing" }, { id: 4, name: "Code Reviews" }, { id: 5, name: "Agile" }] },
        { id: 5, coreName: "API", setSkills: [{ id: 1, name: "REST API Integration" }, { id: 2, name: "Postman API Testing" }] }
    ]);
    return (
        <section id="skillSection" className={`p-2.5 w-1/2 ${focusedSection==="skillSection"?"animateBorder":""}`} ref={skillRef}>
            <Heading title="Skills" />
            <ul className="float-left text-xs">
                {core.map((skill) => (<li className="columnDisplay flex mb-1 border-b border-gray-200 py-2" key={skill.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#754add" className="size-4 hideMobile">
                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium min-w-22.5">{skill.coreName}</span>
                    <SkillSets sets={skill.setSkills} /> </li>))}
            </ul>
        </section>
    );
}
export default Skills;