import React from 'react'
import Login from './Login';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import pawlogo from '../Images/pawlogo2.png'

const Navbar = () => {
    const [popUp, setPopUp] = useState(false);
  return (
    <ReactBootStrap.Navbar img expand="lg" sticky = "top" style = {{backgroundColor: '#F7D59C' }}>
        <ReactBootStrap.Container fluid>

            {/*Link to homepage */}
            <ReactBootStrap.Navbar.Brand as ={Link} to='/'>
                <img src= {pawlogo} height = {50} paddingy = {0}/>
            </ReactBootStrap.Navbar.Brand>

            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll">
            <ReactBootStrap.Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >   
            
            {/*Rest of the navbar links */}
            <ReactBootStrap.Nav.Link  as ={Link} to='/Shelters' className="fs-3" >Shelters</ReactBootStrap.Nav.Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ReactBootStrap.Nav.Link  as ={Link} to='/Expert_Q/A' className="fs-3" >Bookmarks</ReactBootStrap.Nav.Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ReactBootStrap.Nav.Link  as ={Link} to='/About' className="fs-3" >About</ReactBootStrap.Nav.Link>                
        
            </ReactBootStrap.Nav>
                <ReactBootStrap.Form className="d-flex">
                    <ReactBootStrap.Button variant="outline-success" style = {{color: 'black', borderColor: 'black'}} onClick={() => setPopUp(true)}>Log In / Sign Up</ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar.Collapse>

        </ReactBootStrap.Container>
        {/*Pop up menu for login */}
        <Login pop = {popUp} setPopUp = {setPopUp}/>
    </ReactBootStrap.Navbar>

  )
}

export default Navbar