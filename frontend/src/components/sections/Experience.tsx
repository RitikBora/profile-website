import { TimeLine } from '../timeline/TimeLine';





export const Experience = () =>
{
    return (
       <div className='m-28 grid grid-cols-7'>
            <div className='col-span-3 flex justify-center items-center'>
                    <ExperienceItem
                        date="15-Aug, 2021 - Present"
                        role="Full Stack Developer"
                        company="miniOrange, Pune IN"
                        description="Developed and maintaned various applications in JAVA and MERN stack 
                        for marketplaces like Atlassian and Monday.com.
                        
                        Besides that, provided support and handled clients worldwide"
                        extraClasses='left-64 top-56 '
                    />
            </div>
            <div className='col-span-1  flex justify-center'>
                <TimeLine/>
            </div>
            <div className='col-span-3' >
                 <ExperienceItem
                    date="1-Jan, 2020 - 1-Jul, 2020"
                    role="Intern"
                    company="Copper Cloud, Pune IN "
                    description={`Worked as an intern in IOT team. Built small IOT projects
                    and researched on Long Range communication modules over sea.`}
                    extraClasses='bottom-20' 
                    style={{right: "300px"}}
                />
            </div>
       </div>
    )
}

interface ExperienceItemProps {
  date: string;
  role: string;
  company: string;
  description: string;
  extraClasses?: string,
  style ?: React.CSSProperties
}


const ExperienceItem: React.FC<ExperienceItemProps> = ({  date, role, company, description  , extraClasses , style}) => (
  <div className={`shadow-custom-box-xl  absolute p-3 ${extraClasses}`} style={style}>
      <span className='text-xl text-orange-500'>{date}</span>
      <div className='pt-5 text-2xl font-semibold text-slate-700'>{role}</div>
      <div className='text-lg pt-2 font-semibold text-slate-500'>{company}</div>
      <div className='pt-4 pb-8 whitespace-pre-line'>{description}</div>
  </div>
);
