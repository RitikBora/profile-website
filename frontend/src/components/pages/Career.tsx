import { useState } from "react";
import RoundedButton from "../buttons/RoundedButton"
import { Education } from "../sections/Education";
import { Experience } from "../sections/Experince";
import { Skills } from "../sections/Skills";

export const Career =  () =>
{
    const [selectedSection , setSelectedSection]  = useState("skills");



    return (
       <div>
             <div className="flex justify-center  pt-5">
                <div className="w-64 flex justify-between">
                    <RoundedButton innerText="Skills" onClickFunction={() => {setSelectedSection("skills")}}   additionalClasses="text-m py-1 px-2 text-green-800 font-semibold"/>
                    <RoundedButton innerText="Experience" onClickFunction={() => {setSelectedSection("experience")}}   additionalClasses="text-m py-1 px-2 text-green-800 font-semibold"/>
                    <RoundedButton innerText="Education" onClickFunction={() => {setSelectedSection("education")}}   additionalClasses="text-m py-1 px-2 text-green-800 font-semibold"/>
                </div>    
            </div>
            <div>
                {
                     (() => {
                    switch (selectedSection) {
                        case "skills":
                            return <Skills/>;
                        case "education":
                            return <Education/>;
                        case "experience":
                            return <Experience/>;
                    }
                })()
                }
            </div>
       </div>
    )
}