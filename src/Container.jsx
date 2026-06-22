import Header from './Header'
import Introduction from './Introduction'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import Education from './Education'
import { useRef } from 'react'
import { useState } from 'react'
function Container() {
        const aboutRef=useRef(null);
        const skillRef=useRef(null);
        const workRef=useRef(null);
        const expRef=useRef(null);
        const contactRef=useRef(null);
        const eduRef=useRef(null);
        const [focusedSection,setFocusedSection]=useState("");
    return (
        <>
            <Header focusedSection={focusedSection} setFocusedSection={setFocusedSection} eduRef={eduRef}  expRef={expRef} aboutRef={aboutRef} skillRef={skillRef} workRef={workRef} contactRef={contactRef}/>
            <Introduction contactRef={contactRef} />
            <div className='columnDisplay px-10 pt-10 flex gap-5 float-left'>
                <About aboutRef={aboutRef} focusedSection={focusedSection}/>
                <Skills skillRef={skillRef} focusedSection={focusedSection} />
            </div>
            <div className='px-10 float-left'>
                <Projects workRef={workRef} focusedSection={focusedSection}/>
                <WorkExperience  expRef={expRef} focusedSection={focusedSection}/>
                <Education eduRef={eduRef} focusedSection={focusedSection}/>
            </div>
            <footer className='mt-10 bg-violet-400 text-sm float-left w-full py-2 text-center font-semibold cursor-default'>
                Built with React.js and Tailwind CSS, showcasing component-based architecture, state management, Responsive Design.
            </footer>
        </>
    )
}
export default Container;