import React from 'react'
import IMAGES from './images/imag';
import { Link } from 'react-router-dom';


const Explore = () => {
  return (
    <div>
      <div class="main-content-explore" >
                <h1>We Provide Our Customer With Wide Range Of Facilities</h1>
                <div class="explore-facilities">
                    <div class="explore-tabs">
                        <div class="card">
                            <img src={IMAGES.img3} alt="Avatar" />
                                <h4><b>Weights</b></h4>
                        </div>
                        <div class="card">
                            <img src={IMAGES.img4}  alt="Avatar" />
                                <h4><b>Dumbbell</b></h4>
                        </div>
                        <div class="card">
                            <img src={IMAGES.img5}  alt="Avatar"  />
                                <h4><b>ThreadMill</b></h4>
                        </div>    
                    </div>
                    <div class="explore-tabs">
                        <div class="card">
                            <img src={IMAGES.img6}  alt="Avatar"  />
                                <h4><b>Keg Ball</b></h4>
                        </div>
                        <div class="card">
                            <img src={IMAGES.img7}  alt="Avatar"  />
                                <h4><b>Exercise Cycle</b></h4>
                        </div>
                        <div class="card">
                            <img src={IMAGES.img8}  alt="Avatar" />
                                <h4><b>Strength Machines</b></h4>
                        </div>    
                    </div>
                    <div class="explore-tabs">
                        <div class="card">
                            <img src={IMAGES.img9}  alt="Avatar"  />
                                <h4><b>Gym Accessories</b></h4>
                        </div>
                        <div class="card">
                            <img src={IMAGES.img10}  alt="Avatar" />
                                <h4><b>Sauna</b></h4>
                        </div>
                        <div class="card">
                            <img src={IMAGES.img11}  alt="Avatar"  />
                                <h4><b>Swimming Pools</b></h4>
                        </div>    
                    </div>
                </div>
            </div>
            <div class="foot">
                <div class="footer-container">
                    <div class="Address">
                        <h6>Address</h6>
                        <p>Street:  259 2nd Floor, Parklane</p>
                        <p>City:   Hyderabad</p>
                        <p>State/province/area:Telanga</p>
                        <p>Phone number:  04055210962</p>
                        <p>Zip code:  500003</p>
                        <p>Country calling code:+91</p>
                        <p>Country:India</p>
                    </div>
                    <div class="Links">
                    <Link to="/">Homepage</Link>
                        <Link to="/Features">Features</Link>
                        <Link to="/Explore">Explore</Link>
                    </div>
                    <div class="social-media">
                        <Link to="">Facebook</Link>
                        <Link to="">Twitter</Link>
                        <Link to="">Instagram</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Explore
