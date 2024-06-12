import { EducationTimeLine } from '../timeline/EducationTimeLine';

export const Education = () =>
{
    return (
       <div className='m-28 mt-16 grid grid-cols-7 '>
            <div className='col-span-3 flex justify-end items-center '>
                    <EducationItem
                        date="May 2017 - Jun 2021"
                        school="E&TC Engineering"
                        degree="Army Institue of technology, Pune"
                        sgpa="8.8 SGPA"
                        style={{left : '430px' , top: '200px'}}
                    />
                     <EducationItem
                        date="Apr 2014 - Mar 2015"
                        school="10th Class"
                        degree="Army public school, Guwahati"
                        sgpa="9.6 CGPA"
                        style={{left : '465px' , bottom: "45px"}}
                    />
                   
            </div>
            <div className='col-span-1  flex justify-center'>
                <EducationTimeLine/>
            </div>
            <div className='col-span-3' >
                  <EducationItem
                       date="Apr 2016 - Mar 2017"
                        school="12th Class"
                        degree="Army public school, Kirkee"
                        sgpa="90.6 %"
                        style={{right : '490px' , bottom: "215px"}}
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
      <div className='pt-4   whitespace-pre-line text-slate-500 font-semibold'>{sgpa}</div>
  </div>
);
