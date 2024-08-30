import React from 'react'
import IMAGES from './images/imag'
import { Link } from 'react-router-dom';
import './App.css';
const Homepage = () => {

  return (
    <div>   
                    <div class="main-content">
                <div class="img-holder">
                    <img src={IMAGES.img2} alt="gym-wallpaper" width="500vw" height="645vh"></img>
                </div>
                <div class="content">
                    <div class="content-text">
                        <h1>You Can Start Your</h1>
                        <h1>Workout Classes</h1> 
                        <h1>With Just</h1>
                        <h1>One Click</h1><br/>

                                                <button type="button" className='but'>Get Started Now</button>
                            
                    </div>
 
                </div>
            </div>
            <div class="foot">
                <div class="footer-container">
                    <div class="Address">
                        <h4>Address</h4>
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

export default Homepage
