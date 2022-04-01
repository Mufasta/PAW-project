import React from 'react'
import './temp.css'

//TODO - remove once functional searchar is integrated
const Searchbar = ({placeholder, data}) => {

  return (
    <div className='Search'>
      <div className = 'SearchInputs'>
        <input type = "text" placeholder = {placeholder}/>
      </div>
      <div className = 'DataResults'>
      </div>
    </div>
  )
}

export default Searchbar