import Heading from "./Heading";
import figmaImg from "./assets/icons/figma.png";
import figmaScreenShot from "./assets/images/yummyDiariesImage.png"
import Card from "./Card";
function Projects({workRef,focusedSection}) {
    return (
        <div id="ProjectSection" className='float-left cursor-default mb-2' ref={workRef}>
            <Heading title="Featured Projects" />
            <Card focusedSection={focusedSection} projImg={figmaScreenShot} imgSrc={figmaImg} title="Yummy Diaries" subtitle="Cookbook App(Figma Prototype)" description="High-Fidelity prototype for a cookbook mobile application" coreIcon="" viewLink="https://www.figma.com/proto/jNQ6KcOMXH5WYF6hO3w8Um/Yummy-Diaries?%20node-id=12&t=sRNC4XLOaH1Ks0VQ-1&scaling=scale%20down&contentscaling=xed&page-id=0%3A1&starting-point-nodeid=1%3A2&node-id=1-2" viewLabel="Prototype" imgLabel="Figma" />
        </div>
    )
}
export default Projects;