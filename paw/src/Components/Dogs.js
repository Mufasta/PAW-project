import React from 'react'
import Searchbar from './SearchbarDogs';
import CardView from './CardView';
import  {useEffect , useState}  from 'react'
import DogAPI from './DogAPI';


const Dogs = () => {
 
  //Dogs section of the webpage
  return (  
    <div>

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'black'}}>
            <h1>Search Dog Breeds</h1>
        </div>

        {/* Searchbar and Cards for all cat breeds */}
        <DogAPI/>
        <div>
        </div>       
    </div>
  )
}

export default Dogs