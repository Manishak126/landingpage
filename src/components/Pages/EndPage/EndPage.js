import React from 'react'
import './EndPage.css'
import logo from '../../../Assets/file.png'
const EndPage = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img className="logo1" src={logo} alt="" /> */}
          <h2>
            MyFastX<p className='diffcol'>partner</p>
          </h2>
          <p>
            MyFastX is a leading logistics platform that provides hyper-local,
            on-demand delivery solutions for individuals and businesses. Whether
            you need a delivery boy for your shop or to ship items items within
            city, MyFastX is your trusted partner, making delivery affortless
            and convenient. With a mission to revolutionize logistics through
            innovation and technology, MyFastX is committed to providing
            seamless, end-to-end delivery solutions that exceed customer
            expectations.
          </p>
          <div className="footer-social-icons"></div>
        </div>
        <div className="footer-content-center">
          <h6>Company</h6>
          <ul>
            <li>About Us</li>
            <li>Governance</li>
            <li>Investors</li>
            <li>Press Release</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h6>Policies</h6>
          <ul>
            <li>Terms And Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Fraud Disclimer</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h6>Help</h6>
          <ul>
            <li>Restricted Items</li>
            <li>Parcel size and weight guide</li>
            <li>Packaging guide</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h6>Support</h6>
          <ul>
            <li>FAQ</li>
            <li>Customer Care</li>
            <li>Driver Term and Condition</li>
            <li>Packaging Instruction</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2024 MYFASTEX TECHNOLOGIES PVT LTD. All Rights Reserved CIN:
        U52219UP2023PTC192260
      </p>
    </div>
  );
}

export default EndPage
