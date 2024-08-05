import React from 'react'
import './Testimonial.css'
import delboy from '../../../Assets/delBoy.jpeg'
import profile from '../../../Assets/profile_image.png'
import rating from '../../../Assets/rating_starts.png'
const Testimonial = () => {
  return (
    <div className="page3">
      <div className="testimonial">
        <p className="para">What our partner says</p>
        <h1>Testimonial</h1>
        <p className="shortened-paragraph">
          At MyFastX, our commitment to excellence is reflected in the feedback
          from our valued customers. Here's what they have to say about their
          experiences with our quick and reliable delivery and logistics
          services
        </p>
        <img className="lorry-img" src={delboy} alt="bus" />
      </div>

      <div>
        <div className="card testi">
          <div className="card-body">
            <img src={profile} alt="" />
           
            <p className="">
              “ Joining MyFastX has been a game-changer for me. The flexible
              hours and reliable income have made my life so much easier. “
            </p>
            <img src={rating} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial
