import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactInputSection } from '../sections/ContactInputSection';

export const Contact = () => {
    return (
       <div className="mx-48">
            <div className="flex justify-center">
                <div className="text-center">
                    <div className="text-lg font-semibold pt-5" style={{ color: "#ec9412" }}>
                        CONTACT
                    </div>
                    <div className="text-3xl font-bold pt-1">
                        GET IN TOUCH
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-16">
                <div className="bg-customGray shadow-custom-box-xl w-1/3 mx-4 py-8">
                    <div className='text-center'>
                        <div className='flex justify-center pb-3'>
                            <FaPhone style={{ color: "#ec9412" }} className='text-2xl' />
                        </div>
                        <div className='text-slate-700 font-bold pb-3'>
                            Phone
                        </div>
                        <div>
                            7453082420
                        </div>
                    </div>
                </div>

                <div className="bg-customGray shadow-custom-box-xl w-1/3 mx-4 py-8">
                    <div className='text-center'>
                        <div className='flex justify-center pb-3'>
                            <FaEnvelope style={{ color: "#ec9412" }} className='text-2xl' />
                        </div>
                        <div className='text-slate-700 font-bold pb-3'>
                            Mail
                        </div>
                        <div>
                            ritikbora2000@gmail.com
                        </div>
                    </div>
                </div>

                <div className="bg-customGray shadow-custom-box-xl w-1/3 mx-4 py-8">
                    <div className='text-center'>
                        <div className='flex justify-center pb-3'>
                            <FaMapMarkerAlt style={{ color: "#ec9412" }} className='text-2xl' />
                        </div>
                        <div className='text-slate-700 font-bold pb-3'>
                            Location
                        </div>
                        <div>
                            Pune, India
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ContactInputSection/>
            </div>
       </div>
    )
}
