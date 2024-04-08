import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css';

const events = [
    {
        "date": "6 April, 2024",
        "time": "12:00 AM",
        "event": "Registration Begins",
        "venue": "UNSTOP"
    },
    {
        "date": "11 April, 2024",
        "time": "11:59 PM",
        "event": "Registration Ends",
        "venue": "UNSTOP"
    },
    {
        "date": "12 April, 2024",
        "time": "12:00 AM",
        "event": "SHORTLISTING",
        "venue": "ONLINE"
    },
    {
        "date": "19 April, 2024",
        "time": "11:59 AM",
        "event": "Hack Begins",
        "venue": "IIT (ISM) DHANBAD"
    },
    {
        "date": "21 April, 2024",
        "time": "12:00 PM",
        "event": "Hack Ends",
        "venue": "IIT (ISM) DHANBAD"
    },
    {
        "date": "21 April, 2024",
        "time": "06:00 AM",
        "event": "SUBMISSION BEGINS ",
        "venue": "IIT (ISM) DHANBAD"
    },
    {
        "date": "21 April, 2024",
        "time": "12:00 PM",
        "event": "SUBMISSION ENDS",
        "venue": "IIT (ISM) DHANBAD"
    }
]

const day0 = []

events.forEach(a => {
    day0.push(
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
            date={a.date}
            iconStyle={{ background: '#000000', color: '#000' }}
        >
            <h3 className="vertical-timeline-element-title" style={{"color":"black"}}>{a.event}</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{"color":"black"}}>{a.time}</h4>
            <p style={{"color":"black"}}>
                Venue : {a.venue}
            </p>
        </VerticalTimelineElement>
    )
})

function Timeline() {
    const [Day0, setDay0] = React.useState(true);

    return (
        <div className="timeline"  >
            <div className="mainContent">
                <center>
                    <p className="title">TIMELINE</p>
                </center>
                <div className="content">
                    <VerticalTimeline>
                        {Day0 && day0}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Timeline;