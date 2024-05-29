import { Menu } from "./Menu";
import { useRecoilState } from "recoil";
import { navVisibleAtom } from "../recoil/navVisibleAtom";

const HamburgerButton = () => {

  const [isNavVisible, setIsNavVisible] = useRecoilState(navVisibleAtom);

  const toggleNav = () => {
    setIsNavVisible(true);
  };

  return (
    <div>
      <button className="p-3 rounded-3xl bg-customGray shadow-custom-xl hover:shadow-inner transition-shadow focus:outline-none"  onClick={toggleNav}>
        <div className="w-4 bg-gray-800 mt-0.5" style={{ height: '2.5px' }}></div>
        <div className="w-4 bg-gray-700 my-1 " style={{ height: '2px' }} ></div>
        <div className="w-4 h-0.5 bg-gray-800 mb-0.5" style={{ height: '2.5px' }} ></div>
      </button>

       {isNavVisible && (
         <Menu/>
      )}
    </div>
  );
};

export default HamburgerButton;
