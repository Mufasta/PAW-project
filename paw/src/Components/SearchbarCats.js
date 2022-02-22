import React from 'react'

const Searchbar = ({placeholder, data}) => {
  return (
    <div className='Search' style={{borderRadius: 12, display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <div className = 'SearchInputs'>
        <input type = "text" placeholder = {placeholder}/>
        <div className='SearchIcon'>
        </div>
      </div>
      <div className = 'DataResults'>

      </div>
    </div>
  )
}

export default Searchbar