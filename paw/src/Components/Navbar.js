import React, { Children } from 'react'
import Login from './Login';
import * as ReactBootStrap from "react-bootstrap";
import { useState } from 'react';


const Navbar = () => {
    const [popUp, setPopUp] = useState(false);
  return (
    <ReactBootStrap.Navbar expand="lg" sticky = "top" style = {{backgroundColor: '#F7D59C' }}>
        <ReactBootStrap.Container fluid>
            <ReactBootStrap.Navbar.Brand href="#">PAW</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll">
            <ReactBootStrap.Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <ReactBootStrap.Nav.Link href="#action1">Breeds A-Z</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#action2">Shelter</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="Expert Q/A" id="navbarScrollingDropdown">
                <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
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