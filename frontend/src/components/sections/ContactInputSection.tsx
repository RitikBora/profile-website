import RoundedButton from "../buttons/RoundedButton"

export const ContactInputSection = () =>
{
    return(
        <div>
            <div className="pt-16 grid grid-cols-2">
                <div className="cols-span-1">
                    <input type="text" placeholder="Name" className="bg-customGray shadow-custom-box-xl  text-gray-900 shadow-custom-xl hover:shadow-inner-xl transition-shadow focus:outline-none py-3 ml-4 px-4 w-full rounded-full mb-5" />
                    <input type="text" placeholder="Email" className="bg-customGray shadow-custom-box-xl hover:shadow-inner-xl transition-shadow focus:outline-none py-3 px-4 w-full rounded-full ml-4 mb-5" />
                    <input type="text" placeholder="Subject" className="bg-customGray shadow-custom-box-xl hover:shadow-inner-xl transition-shadow focus:outline-none py-3 px-4 w-full rounded-full  ml-4 ml-4mb-5" />
                </div>
                <div className="cols-span-1 px-5">
                    <textarea  placeholder="Message" className="bg-customGray shadow-custom-box-xl  text-gray-900 shadow-custom-xl hover:shadow-inner-xl transition-shadow focus:outline-none py-3 h-full ml-4 px-2 w-full rounded-3xl mb-5 placeholder:font-semibold " />
                </div>
            </div>
            <div className="pt-5 flex justify-end pr-2">
                <RoundedButton innerText="Submit" onClickFunction={() => {}} style={{ color: "#ec9412" }} additionalClasses="px-3 py-2"/>
            </div>
        </div>
    )
}