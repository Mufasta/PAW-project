import React, { Children } from 'react'
import Login from './Login';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';


const Navbar = () => {
    const [popUp, setPopUp] = useState(false);
  return (
    <ReactBootStrap.Navbar expand="lg" sticky = "top" style = {{backgroundColor: '#F7D59C' }}>
        <ReactBootStrap.Container fluid>
            
            <ReactBootStrap.Navbar.Brand as ={Link} to='/'>PAW</ReactBootStrap.Navbar.Brand>

            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll">
            <ReactBootStrap.Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >   
               
            <ReactBootStrap.Nav.Link  as ={Link} to='/Shelters'>Shelters</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link  as ={Link} to='/Expert_Q/A'>Expert Q/A</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link  as ={Link} to='/About'>About</ReactBootStrap.Nav.Link>                
        
            </ReactBootStrap.Nav>
                <ReactBootStrap.Form className="d-flex">
                    <ReactBootStrap.Button variant="outline-success" style = {{color: 'black', borderColor: 'black'}} onClick={({ }) => setPopUp(true)}>Log In / Sign Up</ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar.Collapse>

        </ReactBootStrap.Container>
        <Login pop = {popUp} setPopUp = {setPopUp}/>
    </ReactBootStrap.Navbar>

  )
}

export default Navbar