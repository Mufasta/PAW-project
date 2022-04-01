import React from 'react'
import CatAPI from './CatAPI'
import { Link } from "react-router-dom";


//Temporary page that holds the cat search bar right now (CatAPI page)
const TemporaryCatsPage = () => {
  return (
    <div as ={Link} to='/Temp'>
        <CatAPI/>
    </div>
  )
}

export default TemporaryCatsPage