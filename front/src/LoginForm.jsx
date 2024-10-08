import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function LoginForm() {    
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post("https://gym-f1xr.onrender.com/login", { email, password })
      .then(result => {
          console.log(result)
          if(result.data === "Success"){
              navigate("/Features")
          }else{
              navigate("/register")
              alert("You are not registered to this service")

          }
     
      })
      .catch(err => console.log(err))
  }


return (
  <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">

          <form onSubmit={handleSubmit}>
              
              <div className="mb-3">
                  <label htmlFor="email">
                      <strong>Email</strong>
                  </label>
                  <input type="text" 
                  placeholder='Enter Email' 
                  autoComplete='off' 
                  name='email' 
                  className='form-control rounded-0' 
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
                  className='form-control rounded-0' 
                  onChange={(e) => setPassword(e.target.value)}

                  />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                  Login
              </button>
      
              <p>Don't have an account?</p>
              <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                  Sign Up
              </Link>
              </form>
          
      </div>
);
}

export default LoginForm;