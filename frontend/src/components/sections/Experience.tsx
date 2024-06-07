import { TimeLine } from '../timeline/TimeLine';





export const Experience = () =>
{
    return (
       <div className='m-28 grid grid-cols-7'>
            <div className='col-span-3 flex justify-center items-center'>
                    <ExperienceItem
                        date="10-Nov, 2020 - 1-Jan, 2021"
                        role="Full Stack Developer"
                        company="CPC Academy Pune, India"
                        description="Full stack developer at CPC Academy, working on android and spring boot"
                        extraClasses='left-60 top-56'
                    />
            </div>
            <div className='col-span-1  flex justify-center'>
                <TimeLine/>
            </div>
            <div className='col-span-3' >
                 <ExperienceItem
                    date="1-Oct, 2020 - 1-Nov, 2020"
                    role="Android Developer Intern"
                    company="Web Avenue Tech Solutions, India"
                    description={`Worked as a Team Leader, performed tasks such as project management, project design,
                        database design and "ANDROID DEVELOPER". Was successful in making a 2-tier \n (Android and Web)
                        E-commerce application.`}
                    extraClasses='bottom-12 right-36'
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
  extraClasses?: string
}


const ExperienceItem: React.FC<ExperienceItemProps> = ({  date, role, company, description  , extraClasses}) => (
  <div className={`shadow-custom-box-xl  absolute p-3 ${extraClasses}`}>
      <span className='text-xl text-orange-500'>{date}</span>
      <div className='pt-5 text-2xl font-semibold text-slate-700'>{role}</div>
      <div className='text-lg pt-2 font-semibold text-slate-500'>{company}</div>
      <div className='pt-4 pb-8 whitespace-pre-line'>{description}</div>
  </div>
);
