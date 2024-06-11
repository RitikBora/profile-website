
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import RoundedButton from '../buttons/RoundedButton';

export const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            paragraphs: [
                `Ritik’s technical prowess as a software developer and engineer is truly exceptional. His ability to dissect complex problems and devise innovative solutions is unparalleled. His contributions were instrumental in the successful deployment of several critical apps, including the development of robust cloud applications for monday.com. His leadership skills were equally impressive. He not only led by example but also mentored junior team members, fostering a collaborative and productive team environment.`,
                `What sets Ritik apart is his extraordinary personality. He is approachable, kind, and always willing to lend a hand. His positive attitude and strong work ethic are infectious, creating a work atmosphere that is both motivating and enjoyable. Ritik's dedication to helping others and his commitment to excellence make him a true asset to any team. Working with Ritik was an enriching experience. He is not just a talented professional but also a great person to work with.`
            ]
        }
    ];

    return (
        <div className="flex justify-center items-center   bg-customGray">
            <div className="w-full max-w-4xl">
                <h1 className="text-xl md:text-2xl font-bold text-center mb-2" style={{ color: "#ec9412" }}>Testimonials</h1>
                <h1 className="text-2xl md:text-2xl font-bold text-center mb-4">Managers Speak</h1>
                <div className="shadow-custom-box-xl mt-10 w-full p-3 bg-customGrat rounded-lg">
                    {testimonials.map((testimonial) => (
                        <div>
                            <div key={testimonial.id}>
                            <div className=' mb-5'>
                                <FaQuoteLeft className="left" size={'30px'} color='gray' />
                            </div>
                            {testimonial.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-sm md:text-base lg:text-lg leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                            
                            </div>
                            <div className='flex justify-center'>
                               <div>
                                    <img src="testi-1.png" width={"80px"} height={"80px"} alt="testimonial" />
                                    <div className='w-20 text-center '>
                                        <span className='text-lg font-semibold text-slate-700'>Kuldeep</span>
                                    </div>
                               </div>
                            </div>
                            <div className='flex justify-end'>
                                <FaQuoteRight className="right" size={'30px'} color='gray'  />
                            </div>
                        </div>
                        
                    ))}
                </div>
                <div className='flex justify-center pt-5'>
                    <div className='pr-5'>
                        <RoundedButton innerText='<' onClickFunction={() => {}} style={{color :  "#ec9412" , paddingBottom: "5px" }} additionalClasses='text-3xl text-bold px-2' />
                    </div>
                    <div>
                        <RoundedButton innerText='>' onClickFunction={() => {}} style={{color :  "#ec9412" , paddingBottom: "5px" }} additionalClasses='text-3xl text-bold px-2'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
