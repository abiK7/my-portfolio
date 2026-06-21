import { useState } from 'react'
import Heading from './Heading'
import Listing from './Listing'
function Education({ eduRef,focusedSection }) {
    const [education] = useState([
        {
            id: 1,
            duration: "Jun 2016 - Jun 2018",
            title: " Master of Computer Applications(MCA)",
            subtitle: "Anjalai Ammal Mahalingam Engineering College"
        },
        {
            id: 2,
            duration: "Feb 2013 - Apr 2016",
            title: " B.Sc., Computer Science",
            subtitle: "Sengamala Thayaar Educational Trust Women's College"
        }
    ])
    return (
        <div className="float-left" ref={eduRef} id="EduSection">
            <Heading title="Education" />
            {education.map((item) => (
                <Listing key={item.id} duration={item.duration} title={item.title} subtitle={item.subtitle} focusedSection={focusedSection}/>
            ))}
        </div>

    )
}
export default Education;