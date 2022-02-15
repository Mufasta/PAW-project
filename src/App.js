import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
