import CloseButton from "./buttons/CloseButton";
import { MenuButton } from "./buttons/MenuButton";

export function Menu() {
    return (
        <div className="fixed inset-0 z-50 bg-customGray">
            <div className="flex justify-end m-5">
                <CloseButton />
            </div>
            <div className="relative my-24">
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 -rotate-90">&copy; 2024 Ritik Bora</div>
                <div className="flex justify-center w-full">
                    <ul className="flex flex-col">
                        <li className="flex justify-center"><MenuButton innerText="Home"/></li>
                        <li className="flex justify-center"><MenuButton innerText="About"/></li>
                        <li className="flex justify-center"><MenuButton innerText="Career"/></li>
                        <li className="flex justify-center"><MenuButton innerText="Portfolio"/></li>
                        <li className="flex justify-center"><MenuButton innerText="Testimonial"/></li>
                        <li className="flex justify-center"><MenuButton innerText="Contact"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
