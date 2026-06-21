import React, { useState } from "react";
import { useRef } from "react";
import "./assets/css/Common.css";
function Navigation({setFocusedSection,focusedSection,expRef,aboutRef,skillRef,workRef,contactRef,eduRef}){
    const[navItems, setNavItems]=useState([
        {id:1,menu:"About",menuRef:aboutRef},
        {id:2,menu:"Skills",menuRef:skillRef},
        {id:3,menu:"My Work",menuRef:workRef},
        {id:4,menu:"Experience",menuRef:expRef},
       // {id:6,menu:"Certifications"},
       {id:5,menu:"Education",menuRef:eduRef},
        {id:6,menu:"Contact",menuRef:contactRef},
        
    ]);
    const scrollToRef=(ref)=>{
        setFocusedSection(ref.current.id);
        ref.current?.scrollIntoView({
            behaviour:"smooth",
            block:"center"
        });
        setTimeout(function(){
            setFocusedSection("");
        },1000);
    }
    return(
        <nav>
            <ul className="flex justify-between">
                {navItems.map((navItem)=>(<li onClick={()=>scrollToRef(navItem.menuRef)} key={navItem.id} className="px-2 cursor-pointer hover:decoration-2 hover:underline hover:decoration-violet-800 hover:duration-300 hover:ease-in-out">{navItem.menu}</li>))}
            </ul>
        </nav>
    );
}
export default Navigation;