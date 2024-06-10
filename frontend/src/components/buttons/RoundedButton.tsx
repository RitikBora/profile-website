
export const RoundedButton = ({ innerText, onClickFunction, additionalClasses , style}: { innerText: string, onClickFunction: () => void , additionalClasses ?: string , style ?: React.CSSProperties}) => {
    return (
        <button
            className={` rounded-full bg-customGray text-gray-900 shadow-custom-xl hover:shadow-inner-xl transition-shadow focus:outline-none text-center ${additionalClasses}`} style={style}
            onClick={onClickFunction}
        >
            {innerText}
        </button>
    );
};

export default RoundedButton;
