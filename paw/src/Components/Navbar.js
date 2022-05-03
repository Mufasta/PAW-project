import React from 'react'
import Login from './Login';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config"

const Navbar = (props) => {
    const [popUp, setPopUp] = useState(false);
    const [loginState, setLoginState] = useState(props.currentUser);

    function handleSignOut() {
        signOut(auth);
        setLoginState(false)
        console.log("signed out.")
    };
    onAuthStateChanged(auth, (currentUser) => {
        setLoginState(currentUser)
    })
  return (loginState) ? (
    <ReactBootStrap.Navbar expand="lg" sticky="top" style={{ backgroundColor: '#F7D59C' }}>
              <ReactBootStrap.Container fluid>

                  {/*Link to homepage */}
                  <ReactBootStrap.Navbar.Brand as={Link} to='/'>PAW</ReactBootStrap.Navbar.Brand>

                  <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
                  <ReactBootStrap.Navbar.Collapse id="navbarScroll">
                      <ReactBootStrap.Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >

                          {/*Rest of the navbar links */}
                          <ReactBootStrap.Nav.Link as={Link} to='/Shelters'>Shelters</ReactBootStrap.Nav.Link>
                          <ReactBootStrap.Nav.Link as={Link} to='/Expert_Q/A'>Bookmarks</ReactBootStrap.Nav.Link>
                          <ReactBootStrap.Nav.Link as={Link} to='/About'>About</ReactBootStrap.Nav.Link>

                      </ReactBootStrap.Nav>
                      <ReactBootStrap.Form className="d-flex">
                          <ReactBootStrap.Button variant="outline-success" style={{ color: 'black', borderColor: 'black' }} onClick={() => handleSignOut()}>Sign out</ReactBootStrap.Button>
                      </ReactBootStrap.Form>
                  </ReactBootStrap.Navbar.Collapse>

              </ReactBootStrap.Container>
              {/*Pop up menu for login */}
              <Login pop={popUp} setPopUp={setPopUp} currentUser = {loginState}/>
          </ReactBootStrap.Navbar>
  ) : (
          <ReactBootStrap.Navbar expand="lg" sticky="top" style={{ backgroundColor: '#F7D59C' }}>
              <ReactBootStrap.Container fluid>

                  {/*Link to homepage */}
                  <ReactBootStrap.Navbar.Brand as={Link} to='/'>PAW</ReactBootStrap.Navbar.Brand>

                  <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
                  <ReactBootStrap.Navbar.Collapse id="navbarScroll">
                      <ReactBootStrap.Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >

                          {/*Rest of the navbar links */}
                          <ReactBootStrap.Nav.Link as={Link} to='/Shelters'>Shelters</ReactBootStrap.Nav.Link>
                          <ReactBootStrap.Nav.Link as={Link} to='/Expert_Q/A'>Bookmarks</ReactBootStrap.Nav.Link>
                          <ReactBootStrap.Nav.Link as={Link} to='/About'>About</ReactBootStrap.Nav.Link>

                      </ReactBootStrap.Nav>
                      <ReactBootStrap.Form className="d-flex">
                          <ReactBootStrap.Button variant="outline-success" style={{ color: 'black', borderColor: 'black' }} onClick={() => setPopUp(true)}>Log In / Sign Up</ReactBootStrap.Button>
                      </ReactBootStrap.Form>
                  </ReactBootStrap.Navbar.Collapse>

              </ReactBootStrap.Container>
              {/*Pop up menu for login */}
              <Login pop={popUp} setPopUp={setPopUp} />
          </ReactBootStrap.Navbar>
  )
}

export default Navbar