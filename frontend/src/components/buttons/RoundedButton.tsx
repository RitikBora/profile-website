
export const RoundedButton = ({ innerText, onClickFunction, additionalClasses }: { innerText: string, onClickFunction: () => void , additionalClasses ?: string}) => {
    return (
        <button
            className={` rounded-full bg-customGray text-gray-900 shadow-custom-xl hover:shadow-inner-xl transition-shadow focus:outline-none text-center ${additionalClasses}`}
            onClick={onClickFunction}
        >
            {innerText}
        </button>
    );
};

export default RoundedButton;
