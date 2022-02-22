import React from 'react'
import Searchbar from './SearchbarCats';
import CardView from './CardView';

const Dogs = () => {
  return (
    <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'black'}}>
            <h1>Search Dog Breeds</h1>
        </div>
        {/*Search bar video i used https://www.youtube.com/watch?v=x7niho285qs*/}
        <Searchbar placeholder = "Search Specific Breeds"/>
        <div>
            <h1> </h1>
        </div>
        <CardView/>
    </div>
  )
}

export default Dogs