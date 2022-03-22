import React from 'react'
import CatAPI from './CatAPI'
import { Link } from "react-router-dom";


const TemporaryCatsPage = () => {
  return (
    <div as ={Link} to='/Temp'>
        <CatAPI/>
    </div>
  )
}

export default TemporaryCatsPage