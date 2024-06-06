import RoundedButton from "../buttons/RoundedButton"
import SocialAnchor from "../buttons/SocialButton"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';


export const About =  () =>
{
    return (
        <div className="   ">
            <div className="flex justify-center text-xl font-bold pt-6">
                
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
                            <SocialAnchor href="https://www.facebook.com/profile.php?id=100037982433622" icon={FaFacebookF} />
                            <SocialAnchor href="https://twitter.com/AdityaK25587732" icon={FaTwitter} />
                            <SocialAnchor href="https://www.instagram.com/timmyaditya/" icon={FaInstagram} />
                            <SocialAnchor href="https://www.linkedin.com/in/aditya-kharat-21366a190" icon={FaLinkedin} />
                            <SocialAnchor href="https://youtu.be/f-POU0lphJ0" icon={FaYoutube} />
                            <SocialAnchor href="https://github.com/timmyaditya" icon={FaGithub} />
                        </div>
                    </div>                    
                </div>
                <div className="text-lg text-neutral-500 col-span-4 ">
                    <div className="">
                        <span className="text-zinc-600 font-semibold">Hi! My name is Aditya Kharat and I am Software Engineer. </span>
                         I am highly organized and <br /> detail-oriented Third year Computer Engineering Student. I have good technical skills in <br /> android, java, spring boot, sql, dbms.
                    </div>
                    <div className="pt-10">
                        Indeed i like to do backend stuff. Apart from technical details i love playing badminton , <br />listening songs and making videos for my youtube channel.
                    </div>

                    <div className="flex pt-16  w-64 justify-between">
                        <RoundedButton innerText="Download CV" onClickFunction={() => {}}   additionalClasses="text-l py-2.5 px-4 text-green-800 font-semibold"/>
                        <RoundedButton innerText="Hire me" onClickFunction={() => {}}   additionalClasses="text-l py-2.5 px-4 text-green-800 font-semibold"/>
                    </div>
                </div>
            </div>
        </div>
    )
}