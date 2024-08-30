import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {    

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post("http://localhost:3001/register", { name, email, password })
      .then(result => {console.log(result)
      navigate("/loginForm")
      })
      .catch(err => console.log(err))
    }
return (
     <div>      <div className="">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="email">
                      <strong>Name</strong>
                  </label>
                  <input type="text" 
                  placeholder='Enter Name' 
                  autoComplete='off' 
                  name='name' 
                  id='name'
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="email">
                      <strong>Email</strong>
                  </label>
                  <input type="text" 
                  placeholder='Enter Email' 
                  autoComplete='off' 
                  name='email' 
                  id='email'
               
                  onChange={(e) => setEmail(e.target.value)}

                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="email">
                      <strong>Password</strong>
                  </label>
                  <input type="password" 
                  placeholder='Enter Password' 
                  name='password' 
                  id='password'
                  
                  onChange={(e) => setPassword(e.target.value)}

                  />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                 <h5>Sign Up</h5> 
              </button>
              
              <p>Already have an account?</p>
              <Link to="/loginForm" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                 <h5>Login</h5> 
              </Link>
          </form>
      </div>
      </div>
);
}

export default Register;