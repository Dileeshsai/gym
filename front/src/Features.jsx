import React from 'react'
import'./App.css';
import  {Link}  from 'react-router-dom';




const Features = () => {
  return (
    <div>
            <div class="main-content-features">
                <h1>Features By Us</h1>
                <div class="features-holder">
                    <div class="feature-1">
                        <section class="feature-text" >
                            <h1>Equipment</h1>
                            <h4>We have Cardio Machines</h4><br/>
                            <h4>We have Barbells and Plates</h4><br/>
                            
                            <h4>We have Strength Machines</h4><br/>
                            <h4>We have Multi-jungle Machines</h4><br/>
                        </section>
                    </div>
                    <div class="feature-2">
                        <section class="feature-text">
                            <h1>Fitness Classes</h1><br/>
                            <h4>Zumba Classes</h4><br/>
                            <h4>Yoga Classes</h4><br/>
                            <h4>Pilates Classes</h4><br/>
                            <h4>Cycling classes</h4><br/>
                        
                        </section>
                    </div>
                    <div class="feature-3">
                        <section class="feature-text">
                            <h1>Online Platform</h1><br/>
                            <h4>Online Fitness classes</h4><br/>
                            <h4>Online Gym equipment orders</h4><br/>
                            <h4>Online videos Of Training That Can Be Accessed Any Time</h4><br/>
                            <h4>Diet Plans For Different Desired Body Style</h4><br/>
                        </section>
                    </div>
                </div>
                <h1>Packages</h1>
                <div class="packages-holder">
                    <div class="column-1">
                        <ol class="price">
                          <li class="header">Basic</li>
                          <li class="grey">₹ 299.99 / year</li>
                          <li>Only Gym</li>
                          <li>No Personal Trainer</li>
                          <li>No Diet Plan</li>
                          <li>    Water      </li>
                          <li class="grey"><button class="button">Select</button></li>
                        </ol>
                    </div>
                      
                    <div class="column-2">
                        <ol class="price">
                          <li class="header">Pro</li>
                          <li class="grey">₹ 824.99 / year</li>
                          <li>Gym and Pool</li>
                          <li>Personal Trainer</li>
                          <li>Diet Plan</li>
                          <li>Water and Energy Drink</li>
                          <li class="grey"><button class="button">Select</button></li>
                        </ol>
                    </div>
                      
                    <div class="column-3">
                        <ol class="price">
                          <li class="header">Premium</li>
                          <li class="grey">₹ 1449.99 / year</li>
                          <li>Gym, pool</li>
                          <li>Personal Trainer</li>
                          <li>Personalized Workout</li>
                          <li>Includes Protein Powder</li>
                          <li class="grey"><button class="button">Select</button></li>
                        </ol>
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
                        <Link to="/">Home</Link>
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

export default Features
