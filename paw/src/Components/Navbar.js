import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg" sticky = "top">
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
                    <ReactBootStrap.Button variant="outline-success">Log In / Sign Up</ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar.Collapse>

        </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  )
}

export default Navbar