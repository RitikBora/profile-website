import RoundedButton from "../buttons/RoundedButton"
import SocialAnchor from "../buttons/SocialButton"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const resumeLink = "https://www.dropbox.com/scl/fi/ftauo4nwb2mqknza6qnph/Ritik-s-Resume.pdf?rlkey=takbs7zpukfyo399mxqd2vopx&st=3jqnw46u&dl=1"
const mailFunction = () =>
{
    window.location.href = 'mailto:ritikbora2000@gmail.com?subject=Job Opportunity&body=Hello Ritik,';
}

const downloadResume = () =>
{
    window.open(resumeLink ,  '_blank');
}

export const About =  () =>
{
    return (
        <div className="">
           <div>
                 <div className="flex justify-center text-xl font-bold pt-6" style={{color: "#ec9412"}}>
                
                    MAIN INFO
                </div>
                <div className="flex justify-center text-4xl font-semibold pt-1">
                    ABOUT ME
                </div>
                <div className="grid grid-cols-7 pt-24">
                    <div className=" col-span-3 flex justify-end mr-16 -mt-10">
                        <div>
                            <div className="shadow-inner  rounded-lg flex justify-center items-center" style={{width: "375px" , height: "374px"}}>
                                <img src="about.png" width="350px" height="350px" alt="Bora.jpg" className=""/>
                            </div>
                            <div className="flex justify-between my-4 mx-12">
                                <SocialAnchor href="https://www.facebook.com/ritik.bora.5" icon={FaFacebookF} />
                                <SocialAnchor href="https://x.com/RitikBora11" icon={FaTwitter} />
                                <SocialAnchor href="https://instagram.com/ritik_bora/" icon={FaInstagram} />
                                <SocialAnchor href="www.linkedin.com/in/ritikbora" icon={FaLinkedin} />
                                <SocialAnchor href="https://github.com/RitikBora" icon={FaGithub} />
                            </div>
                        </div>                    
                    </div>
                    <div className="text-lg text-neutral-500 col-span-4 ">
                        <div className="">
                            <span className="text-zinc-600 font-semibold">Hi! My name is Ritik Bora and I am Software Engineer </span>
                            with 3 years of experience in developing and maintaining high-performance software applications. I'm proficient in the MERN stack, Next.js <br /> and Java, which allows me to build scalable solutions tailored to diverse client needs. </div>
                        <div className="pt-8">
                            I have led cross-functional teams to deliver impactful projects. With strong problem-solving abilities <br /> and excellent communication skills, I am dedicated to delivering high-quality software solutions <br />that exceed expectations.    
                        </div>

                        <div className="pt-8">
                            I'm probably the most passionate developer you would ever get to work with. <br /> If you have some great projects that need 
            some amazing skills. I'm your guy.
                        </div>

                        <div className="flex pt-16  w-64 justify-between">
                            <RoundedButton innerText="Download CV" onClickFunction={downloadResume}   additionalClasses="text-l py-2.5 px-4 text-green-800 font-semibold"/>
                            <RoundedButton innerText="Hire me" onClickFunction={mailFunction}   additionalClasses="text-l py-2.5 px-4 text-green-800 font-semibold"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}