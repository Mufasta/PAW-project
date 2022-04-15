import React from 'react'
import Searchbar from './SearchbarCats';
import CatAPI from './CatAPI';


const Cats = () => {
 
  //Cats section of the webpage
  return (  
    <div>
        {/* Displays the header */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'black'}}>
            <h1>Search Cat Breeds</h1> 
        </div>
        {/* Searchbar and Cards for all cat breeds */}
        <CatAPI/>
        <div>
        </div>
    </div>
  )
}

export default Cats