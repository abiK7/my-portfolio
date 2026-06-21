import ProfileIcon from "./ProfileIcon";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
function Header({setFocusedSection,focusedSection,eduRef,expRef,aboutRef,skillRef,workRef,contactRef}){
    const [isScrolled,setIsScrolled]=useState("");
    useEffect(()=>{
        const onScroll=()=>{
            setIsScrolled(window.scrollY>50);
        }
        window.addEventListener("scroll",onScroll);

    })
    return(
        <header className={`ease-in-out transition-all duration-300 text-xs px-10 py-4 bgShade text-white flex justify-between ${isScrolled==true?"fixed w-full z-10 shadow-md shadow-gray-700 top-0 left-0":""}`}>
            <ProfileIcon />
            <Navigation setFocusedSection={setFocusedSection} focusedSection={focusedSection} eduRef={eduRef} expRef={expRef} aboutRef={aboutRef} skillRef={skillRef} workRef={workRef} contactRef={contactRef}/>
        </header>
    )
}
export default Header;