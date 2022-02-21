import React, { Component } from 'react';
// import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Axios from 'axios'
// import { useState } from 'react';
import DogList from './DogList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogs: []//state for our application
    }
  }

  //fetch from api
  componentDidMount() {
    //react lifecycle method
    //rerender the changes in the dom? 0-50
    fetch("https://dog.ceo/api/breeds/image/random/20")
      .then((res) => res.json()) //promise
      .then((data)  => {//es6 syntax
        // console.log(data); //to check


        //update state - array of url
        this.setState({dogs: data.message })
      })
  }

  render() {
    return (
      <div>
        <p>Hello World</p> 
        <Navbar/>
        <Home />
        <DogList dogs ={this.state.dogs}/> {/*add prop */}
      </div>
    );
  }
}

export default App;
