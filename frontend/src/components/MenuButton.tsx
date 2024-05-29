import { useSetRecoilState } from "recoil";
import { selectedPageAtom } from "../recoil/selectedPage";
import { navVisibleAtom } from "../recoil/navVisibleAtom";

export const MenuButton = ({innerText} : {innerText : string}) => {

    const setSelectedPage = useSetRecoilState(selectedPageAtom);
    const setIsNavVisible = useSetRecoilState(navVisibleAtom);

    const changePage = () =>
    {
        setSelectedPage(innerText.toLocaleLowerCase());
        setIsNavVisible(false);
    }
    return (
        <button  className="px-6 py-2.5 m-2 rounded-full bg-customGray  text-gray-900 shadow-custom-xl hover:shadow-inner-xl transition-shadow focus:outline-none text-3xl  text-center"
            onClick={changePage}
        >{innerText}</button>
    );
};
