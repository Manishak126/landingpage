import React from "react";
import "./Home.css";
import truck from "../../../Assets/truck.png";
import linings from "../../../Assets/linings.png";
import { MdOutlineSupportAgent } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="card home py-5">
          <div className="card-body home-body">
            <img className="truck_img" src={truck} alt="Truck" />
          </div>

          <div className="home-title">
            <b>Welcome to MyFastX Partner</b>
            <p>Quick & Reliable Delivery and Logistics solution</p>
          </div>

          <div className="home-content">
            <p>
              At MyFastX, we are revolutionizing the delivery and logistics
              industry by providing swift, dependable services to our clients.
              Our mission is to ensure every package reaches its destination on
              time, every time.
            </p>
          </div>
        </div>

        <div className="card about py-5">
          <div className="card-body about-img">
            <img className="truck_img" src={linings} alt="Linings" />
          </div>

          <div className="about-title">
            <p>Drive your success with MyFast</p>
            <h1>Join Us as a Partner Driver</h1>
          </div>

          <div className="about-content">
            <p>
              Are you a vehicle owner looking for new opportunities? Join
              MyFastX today and become part of a dynamic network of drivers.
              With us, you’ll enjoy flexible work hours, competitive earnings,
              and the satisfaction of delivering smiles across the city.
            </p>
          </div>

          <div>
            <button type="button" className="btn btn-dark">
              Register now for just Rs. 999
            </button>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="card feat">
          <MdOutlineSupportAgent color="#63B178" size={40} />
          <div className="card-body">
            <h5 className="card-title">Reliable Income</h5>
            <p className="card-text">
              Earn a steady income with consistent delivery requests.
            </p>
          </div>
        </div>

        <div className="card feat">
          <MdOutlineSupportAgent color="#63B178" size={40} />
          <div className="card-body">
            <h5 className="card-title">Flexible Schedule</h5>
            <p className="card-text">
              Choose your working hours and balance your personal life.
            </p>
          </div>
        </div>

        <div className="card feat">
          <MdOutlineSupportAgent color="#63B178" size={40} />
          <div className="card-body">
            <h5 className="card-title">Support</h5>
            <p className="card-text">
              Access our dedicated support team whenever you need assistance.
            </p>
          </div>
        </div>

        <div className="card feat">
          <MdOutlineSupportAgent color="#63B178" size={40} />
          <div className="card-body">
            <h5 className="card-title">Growth opportuninies</h5>
            <p className="card-text">
              Advance your career with regular training and development
              programs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
