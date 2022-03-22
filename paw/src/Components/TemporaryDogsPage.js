import React from 'react'
import DogAPI from './DogAPI'
import { Link } from "react-router-dom";


const TemporaryDogsPage = () => {
  return (
    <div as ={Link} to='/TempDog'>
        <DogAPI/>
    </div>
  )
}

export default TemporaryDogsPage