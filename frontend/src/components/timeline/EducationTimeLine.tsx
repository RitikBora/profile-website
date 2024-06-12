import { ReactNode } from "react";
import { MdSchool } from "react-icons/md";

export const  EducationTimeLine = () =>
{
    return (
        <div className="">
            <div className="education-timeline" style={{color : "#ec9412"}}>
                
                <div className='z-10 pt-5'>    
                    <TimeLineIcon
                    icon={<MdSchool />}
                    extraClasses="-left-5 top-6"
                    />
                </div>
                <div className='z-10 pt-32'>
                    <TimeLineIcon
                    icon={<MdSchool />}
                    extraClasses="-right-5 top-56"

                    />
                </div>
                 <div className='z-10 pt-28'>
                    <TimeLineIcon
                    icon={<MdSchool />}
                    extraClasses="-left-5 bottom-1"
                    />
                </div>
            </div>
        </div>
    )
}

const TimeLineIcon = ({icon , extraClasses} : {icon : ReactNode , extraClasses ?: string}) => (
    
      <div className="flex justify-center ">
        <div className={`absolute  bg-gray-500 w-0.5 h-10 transform rotate-90 ${extraClasses}`}></div>
        <div className='bg-customGray border border-gray-400 text-xl flex justify-center items-center w-12 h-12 rounded-full'>
            {icon}
        </div>
      </div>
      
);