import React from 'react'

const Searchbar = ({placeholder, data}) => {
  return (
    <div className='Search' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <div className = 'SearchInputs'>
        <input type = "text"/>
        <div className='SearchIcon'></div>
      </div>
      <div className = 'DataResults'>

      </div>
    </div>
  )
}

export default Searchbar