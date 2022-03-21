import React from 'react'
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import * as ReactBootStrap from "react-bootstrap";
import { propTypes } from 'react-bootstrap/esm/Image';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../firebase-config"
import { async } from '@firebase/util';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reenterPassword, setReenterPassword] = useState("")
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState("")

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    function validateFormLogin() {
        return email.length > 0 && password.length > 0;
    }
    function validateFormRegister() {
        return email.length > 0 && password.length > 0 && password == reenterPassword;
    }
    function handleSubmitLogin(event) {
        try{
            const recurringUser = signInWithEmailAndPassword(auth, email, password)
            console.log(recurringUser)
            props.setPopUp(false)
        }
        catch(error){
            console.log("did not create it")
        }
    }
    function handleSubmitRegister(event) {
        try{
            const newUser = createUserWithEmailAndPassword(auth, email, password)
            console.log(newUser)
            props.setPopUp(false)
        }
        catch(error){
            console.log("did not create it")
        }
    }
    function handleSignOut(){
        signOut(auth);
    };
  return (props.pop) ? (
      <div className='popUp'>
        <div className='inner-popUp'>
            <div className="Login">
                {login ? (
                     <Form onSubmit={handleSubmitLogin}>
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
                     <Button block size="lg" onClick={handleSubmitLogin} disabled={!validateFormLogin()}>
                     Login
                     </Button>
                     <br/>
                     <div onClick={() => setLogin(false)}>Don't have an account? Register</div>
                     <ReactBootStrap.CloseButton className='closeButton' onClick={() => props.setPopUp(false)}/>
                 </Form>
                ) : (
                    <Form onSubmit={handleSubmitRegister}>
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
                     <Form.Group size="lg" controlId="password">
                     <Form.Label>Re-enter Password</Form.Label>
                     <Form.Control
                         type="password"
                         value={reenterPassword}
                         onChange={(e) => setReenterPassword(e.target.value)}
                     />
                     </Form.Group>
                     <Button block size="lg" onClick={handleSubmitRegister} disabled={!validateFormRegister()}>
                     Sign Up
                     </Button>
                     <ReactBootStrap.CloseButton className='closeButton' onClick={() => props.setPopUp(false)}/>
                 </Form>
                )}
            </div>
        </div>
    </div>
  ):""
}

export default Login
