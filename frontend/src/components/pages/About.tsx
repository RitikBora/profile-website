import RoundedButton from "../buttons/RoundedButton"

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
                <div className=" col-span-3 flex justify-end mr-16">
                    <div className="shadow-inner  rounded-lg flex justify-center items-center" style={{width: "430px" , height: "430px"}}>
                        <img src="about.png" width="400px" height="400px" alt="Bora.jpg" className=""/>
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