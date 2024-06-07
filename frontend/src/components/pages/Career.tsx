import { useState } from "react";
import RoundedButton from "../buttons/RoundedButton";
import { Education } from "../sections/Education";
import { Experience } from "../sections/Experience";
import { Skills } from "../sections/Skills";

export const Career = () => {
    const [selectedSection, setSelectedSection] = useState("experience");
    const [fade, setFade] = useState(true);

    const handleSectionChange = (section : string) => {
        setFade(false); 
        setTimeout(() => {
            setSelectedSection(section); 
            setFade(true); 
        }, 300); 
    };

    return (
        <div className="">
            <div className="flex justify-center pt-5">
                <div className="w-80 flex justify-between">
                    <RoundedButton innerText="Skills" onClickFunction={() => handleSectionChange("skills")} additionalClasses={`text-lg py-2 px-3 text-green-800 font-semibold ${selectedSection === "skills" ? 'shadow-inner-xl' : ''}`} />
                    <RoundedButton innerText="Experience" onClickFunction={() => handleSectionChange("experience")} additionalClasses={`text-lg py-2 px-3 text-green-800 font-semibold ${selectedSection === "experience" ? 'shadow-inner-xl' : ''}`} />
                    <RoundedButton innerText="Education" onClickFunction={() => handleSectionChange("education")} additionalClasses={`text-lg py-2 px-3 text-green-800 font-semibold ${selectedSection === "education" ? 'shadow-inner-xl' : ''}`} />
                </div>
            </div>
            <div className={`fade-container transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {selectedSection === "skills" && <Skills />}
                {selectedSection === "education" && <Education />}
                {selectedSection === "experience" && <Experience />}
            </div>
        </div>
    );
}
