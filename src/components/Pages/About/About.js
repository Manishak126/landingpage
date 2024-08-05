import React from 'react'
import bus from '../../../Assets/Bus.jpeg'
import './About.css'
import { MdOutlineWorkHistory } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const About = () => {
  return (
    <div className="page2">
      <div className="process">
        <p>How it Works</p>
        <h1>Simple Steps to Get Started</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f2faf5", color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">Register Online</h3>
            <p>
              Fill out our easy online application form and pay the registration
              fee of Rs. 999
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>

      <img className="bus-img" src={bus} alt="bus" />
    </div>
  );
}

export default About
