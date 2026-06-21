import Heading from "./Heading";
function About({aboutRef,focusedSection}) {
    return (
        <section id="aboutSection" className={`p-2.5 w-1/2 ${focusedSection==="aboutSection"? "animateBorder":""}`} ref={aboutRef}>
            <Heading title="About Me" />
            <p className="text-xs">Frontend Engineer with 7+ years of experience building cross-platform web and mobile Uls. I specialize in React Native development, Ul implementation from Figma, API integrations and delivering seamless user experiences.<br /><br />
                I have strong debugging skills, a keen eye for design, and a passion for creating accessible and pixel-perfect interfaces.
                Currently upskilling in React and Tailwind CSS.
            </p>
        </section>
    )
}
export default About;