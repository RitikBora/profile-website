import { useSetRecoilState } from "recoil"
import { selectedPageAtom } from "../../recoil/selectedPage"
import { RoundedButton } from "../buttons/RoundedButton";
import { ProfilePhoto } from "../profilPhoto";
import CircleBounce from "../../animations/CircleBounce";

export const Home =  () =>
{
    const setSelectedPage = useSetRecoilState(selectedPageAtom);

    const showAboutSection = () =>
    {
        setSelectedPage('about');    
    } 
    return (
        <div className="mx-48">
            <CircleBounce/>
            <div className="px-8 grid grid-cols-2">
                <div className="py-48">
                    <div className="text-xl text-gray-400 py-2">
                        Hello
                    </div>
                    <div className="text-6xl font-bold py-2">
                        I'm Ritik Bora
                    </div>
                    <div className="text-2xl text-gray-600 py-2">
                        Java, SpringBoot, Android and Web Developer
                    </div>
                    <div className="pt-6">
                        <RoundedButton innerText="More About me" onClickFunction={showAboutSection} additionalClasses="text-l py-2.5 px-4 text-green-800 font-semibold"/>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <ProfilePhoto/>
                </div>
            </div>
        </div>
    )
}