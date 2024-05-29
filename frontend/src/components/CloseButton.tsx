import { useSetRecoilState } from "recoil";
import { navVisibleAtom } from "../recoil/navVisibleAtom";

const CloseButton = () => {
  const setIsNavVisible = useSetRecoilState(navVisibleAtom);

  const toggleNav = () =>
  {
    setIsNavVisible(false);
  }

  return (
    <div className="flex justify-end">
      <button className="p-6 rounded-full bg-customGray shadow-custom-xl hover:shadow-inner transition-shadow focus:outline-none relative w-10 h-10 flex items-center justify-center"
      onClick={toggleNav}>
        <div className="absolute w-5 h-0.5 bg-gray-800 transform rotate-45"></div>
        <div className="absolute w-5 h-0.5 bg-gray-800 transform -rotate-45"></div>
      </button>
    </div>
  );
};

export default CloseButton;
