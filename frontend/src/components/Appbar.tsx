import HamburgerButton from "./buttons/HamburgerButton";

export function Appbar() 
{
    return(
        <div className="mx-48 pt-2  flex  justify-between">
            <div className="text-2xl flex ml-5">
                <img src="bora_logo.png" alt="logo.png" width="65px" height="65px"/>
                <div className="pt-3"  >
                    RITIK BORA
                </div>
            </div>
            <div className="pt-2">
                <HamburgerButton/>
            </div>
        </div>
    )
}