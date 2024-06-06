import { useRecoilValue } from "recoil"
import { selectedPageAtom } from "../recoil/selectedPage"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Career } from "./pages/Career";
import { Portfolio } from "./pages/Portfolio";
import { Testimonial } from "./pages/Testimonial";
import { Contact } from "./pages/Contact";

export const Landing = () => { 
    const selectedPage = useRecoilValue(selectedPageAtom);

    return (
        <div className="">
            {
                (() => {
                    switch (selectedPage) {
                        case "home":
                            return <Home/>;
                        case "about":
                            return <About/>;
                        case "career":
                            return <Career/>;
                        case "portfolio":
                            return <Portfolio/>;
                            case "testimonial":
                            return <Testimonial/>;
                        case "contact":
                            return <Contact/>;
                    }
                })()
            }
        </div>
    )
}
