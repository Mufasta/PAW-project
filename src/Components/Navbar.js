import React from 'react'
import * as ReactBootStrap from "react-bootstrap";


const Navbar = () => {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg">
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
                    <ReactBootStrap.Button variant="outline-success">Log In</ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  )
}

export default Navbar