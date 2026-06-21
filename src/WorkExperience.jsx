import { useState } from 'react'
import Heading from './Heading'
import Listing from './Listing'
function WorkExperience({ expRef, focusedSection }) {
    const [experience] = useState([
        {
            id: 1,
            duration: "Apr 2022 - Feb 2026",
            title: " Senior Software Engineer - UI Developer",
            subtitle: "Tecknodreams Software Consulting Pvt Ltd | Bangaluru(Remote)",
            list: [
                {
                    id: 1,
                    point: "Debugged and resolved complex customer-raised issues in a production React Native app over 3+ months, using Postman to verify API calls and identify root causes. "
                },
                {
                    id: 2,
                    point: "Mentored a junior developer, conducting code reviews and promoting best practices in UI development."
                },
                {
                    id: 3,
                    point: "Recognised by employer in September 2020 for outstanding contribution to MobileApp, Service Desk Settings, and NewUX design initiatives."
                }
            ]
        },
        {
            id: 2,
            duration: "Jun 2018 - Mar 2022",
            title: " Software Engineer - UI Developer",
            subtitle: "Tecknodreams Software Consulting Pvt Ltd | Bangaluru",
            list: [
                {
                    id: 1,
                    point: "Built and maintained front-end features using HTML, CSS, LESS, JavaScript, and jQuery for enterprise web applications."
                },
                {
                    id: 2,
                    point: "Performed unit and manual testing, writing and executing test cases across multiple scenarios to ensure cross-browser compatibility and UI integrity. "
                },
                {
                    id: 3,
                    point: "Created design documentation highlighting existing feature behaviour and proposed improvements for stakeholder alignment."
                }
            ]
        }
    ])
    return (
        <div className="float-left" ref={expRef} id='workSection'>
            <Heading title="Work Experience" />
            {experience.map((item) => (
                <Listing focusedSection={focusedSection} key={item.id} duration={item.duration} title={item.title} subtitle={item.subtitle}>
                    <ul>
                        {item.list.map((listPoint) => (<li key={listPoint.id}>{listPoint.point}</li>))}
                    </ul>
                </Listing>
            ))}
        </div>
    )
}
export default WorkExperience;