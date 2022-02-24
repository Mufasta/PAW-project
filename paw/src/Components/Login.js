import React from 'react'
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import * as ReactBootStrap from "react-bootstrap";
//import { propTypes } from 'react-bootstrap/esm/Image';

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
  return (props.pop) ? (
      <div className='popUp'>
        <div className='inner-popUp'>
            <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
                </Button>
            </Form>
            <ReactBootStrap.CloseButton className='closeButton' onClick={() => props.setPopUp(false)}/>
            </div>
        </div>
    </div>
  ):""
}

export default Login
