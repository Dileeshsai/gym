import React from 'react'
import IMAGES from './images/imag';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 
const Navi = () => {
        const navigate = useNavigate();
      
        const handleSignInClick = () => {
          navigate('/Register');
        };
  return (
    <div className='navi'>
       <Navbar bg="dark" expand="lg"
                variant="dark"
                className="container-fluid">
                  <div className="logo-container">
                <img
                    src={IMAGES.img1}
                    className="logo img-fluid"
                    alt="Logo"
                    width="60" height="70"
                />
            </div>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="mx-auto d-flex justify-content-center" id='mx'>
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/Features">
                        Features
                    </Nav.Link>
                    <Nav.Link href="/Explore">
                        Explore
                    </Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            <Button variant="primary" className="fs-4" onClick={handleSignInClick} style={{marginRight:'3rem'}}>Register</Button>
        </Navbar>
        </div>
  )
}

export default Navi;
