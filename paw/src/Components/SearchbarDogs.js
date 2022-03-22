import React from 'react'
import './temp.css'


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