import React from 'react';
import { useState } from 'react'
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
