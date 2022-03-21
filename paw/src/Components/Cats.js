import React from 'react'
import Searchbar from './SearchbarCats';
import CardView from './CardView';
import  {useEffect , useState}  from 'react'


const Cats = () => {
 

  return (  
    <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'black'}}>
            <h1>Search Cat Breeds</h1>
        </div>
        <Searchbar placeholder = "Search Specific Breeds" />
        <div>
          {/*For spacing */}
          <h1> </h1>
        </div>
        <CardView/>        
    </div>
  )
}

export default Cats