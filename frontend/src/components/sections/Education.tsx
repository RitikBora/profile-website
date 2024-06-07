import { EducationTimeLine } from '../timeline/EducationTimeLine';

export const Education = () =>
{
    return (
       <div className='m-28 mt-16 grid grid-cols-7 '>
            <div className='col-span-3 flex justify-end items-center '>
                    <EducationItem
                        date="Jan, 2021 - Present"
                        school="Computer Engineering"
                        degree="CPC Academy Pune, India"
                        sgpa="9.8"
                        style={{left : '462px' , top: '200px'}}
                    />
                     <EducationItem
                        date="Jan, 2021 - Present"
                        school="Computer Engineering"
                        degree="CPC Academy Pune, India"
                        sgpa="9.8"
                        style={{left : '462px' , bottom: "20px"}}
                    />
                   
            </div>
            <div className='col-span-1  flex justify-center'>
                <EducationTimeLine/>
            </div>
            <div className='col-span-3' >
                  <EducationItem
                        date="Jan, 2021 - Present"
                        school="Computer Engineering"
                        degree="CPC Academy Pune, India"
                        sgpa="9.8"
                        style={{right : '462px' , bottom: "190px"}}
                    />
            </div>
       </div>
    )
}

interface EducationItemProps {
  date: string;
  school: string;
  degree: string;
  sgpa: string;
  style ?: React.CSSProperties
}


const EducationItem: React.FC<EducationItemProps> = ({  date, school , degree , sgpa , style}) => (
  <div className={`shadow-custom-box-xl  absolute py-3 px-10`} style={style}>
      <span className='text-xl text-orange-500'>{date}</span>
      <div className='pt-5 text-2xl font-semibold text-slate-700'>{school}</div>
      <div className='text-lg pt-2 font-semibold text-slate-500'>{degree}</div>
      <div className='pt-4   whitespace-pre-line'>{sgpa}</div>
  </div>
);
