import React from 'react'
import './GetStarted.css'
import { PiPhoneCallFill } from "react-icons/pi";
import { ImMail4 } from "react-icons/im";
const GetStarted = () => {
  return (
    <div className="page3">
      <div className="testimonial">
        <p className="para">Join the MyFastX Community Today!</p>
        <h1>Ready to Get Started?</h1>
        <p className="shortened-paragraph">
          Don't miss out on this incredible opportunity to be part of a leading
          delivery and logistics platform. Sign up now for just Rs.999 and start
          driving your way to success with MyFastX!
        </p>

        <button type="button " class="btn btn-dark cont-btn">
          Register Now
        </button>

        <div className="base">
          <pre className="my-3">
            For more information,
            <br />
            Contact us at:
          </pre>
          <div className="my-3 contact">
            <PiPhoneCallFill className="cont" size={40} color="#63B178" />
            <p>+91-XXXXX XXXXX</p>
          </div>
          <div className="contact">
            <ImMail4 className="cont" size={40} color="#63B178" />
            <p>support@myfastx.com</p>
          </div>
        </div>
      </div>

      <div className="testimonial start-right">
        <p className="para">Frequently Asked Questions</p>
        <h1>Got Questions? We’ve Got Answers!</h1>
        <p className="">
          <div class="dropdown">
            
          </div>
        </p>
      </div>
    </div>
  );
}

export default GetStarted
