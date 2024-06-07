import { ReactNode } from "react";
import { FaBriefcase } from "react-icons/fa";

export const  TimeLine = () =>
{
    return (
        <div className="">
            <div className="timeline">
                
                <div className='z-10 pt-5'>    
                    <TimeLineIcon
                    icon={<FaBriefcase />}
                    extraClasses="-left-5 top-6"
                    />
                </div>
                <div className='z-10 pt-44'>
                    <TimeLineIcon
                    icon={<FaBriefcase />}
                    extraClasses="-right-5 bottom-1"

                    />
                </div>
            </div>
        </div>
    )
}

const TimeLineIcon = ({icon , extraClasses} : {icon : ReactNode , extraClasses ?: string}) => (
    
      <div className="flex justify-center ">
        <div className={`absolute  bg-gray-500 w-0.5 h-10 transform rotate-90 ${extraClasses}`}></div>
        <div className='bg-customGray border border-gray-400 text-lg flex justify-center items-center w-12 h-12 rounded-full'>
            {icon}
        </div>
      </div>
      
);