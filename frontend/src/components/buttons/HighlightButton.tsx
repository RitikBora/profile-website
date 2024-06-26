

export const HighlightButton = ({innerText , clickFunction} : {innerText : string , clickFunction : () => void}) => {

    return (
        <button  className="px-6 py-2.5 m-2 rounded-full bg-customGray  text-gray-900 shadow-custom-xl hover:shadow-inner-xl transition-shadow focus:outline-none text-3xl  text-center"
            onClick={clickFunction}
        >{innerText}</button>
    );
};
