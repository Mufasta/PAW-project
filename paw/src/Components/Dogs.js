import React from 'react'
import Searchbar from './SearchbarDogs';
import CardView from './CardView';
import  {useEffect , useState}  from 'react'


const Dogs = () => {
 
  //Dogs section of the webpage
  return (  
    <div>

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'black'}}>
            <h1>Search Cat Breeds</h1>
        </div>

        {/*Non functional searchbar */}
        <Searchbar placeholder = "Search Specific Breeds" />
        <div>
          {/*For spacing */}
          <h1> </h1>
        </div>
        {/* Displays featured breeds */}
        <CardView/>        
    </div>
  )
}

export default Dogs