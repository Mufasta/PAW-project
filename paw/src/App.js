import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import SheltersPage from './Components/SheltersPage';
import ExpertPage from './Components/ExpertPage';
import ErrorPage from './Components/ErrorPage';
//import { useState } from 'react'
//import axios from "axios";
//import Login from './Components/Login';
import TemporaryCatsPage from './Components/TemporaryCatsPage';

//to use react router dom: npm install react-router-dom
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<HomePage/>}/> 
        <Route path = '/Shelters' element = {<SheltersPage/>}/>
        <Route path  ='/Expert_Q/A' element = {<ExpertPage/>}/>
        <Route path ='/About' element = {<AboutPage/>}/>
        <Route path = '*' element = {<ErrorPage/>}/>{/*Whatever route doesnt't exist */}
        <Route path = '/Temp' element = {<TemporaryCatsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
