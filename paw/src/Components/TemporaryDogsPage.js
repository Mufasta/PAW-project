import React from 'react'
import DogAPI from './DogAPI'
import { Link } from "react-router-dom";

//Temporary page that holds the fog search bar right now (dogAPI page)
const TemporaryDogsPage = () => {
  return (
    <div as ={Link} to='/TempDog'>
        <DogAPI/>
    </div>
  )
}

export default TemporaryDogsPage