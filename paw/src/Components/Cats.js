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

        {/*Non functional searchbar */}
        <CatAPI/>
        <div>
          {/*For spacing */}
          <h1> </h1>
        </div>
        {/* Displays featured breeds */}
        {/* <Card/>         */}
    </div>
  )
}

export default Cats