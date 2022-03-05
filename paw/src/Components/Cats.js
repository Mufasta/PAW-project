import React from 'react'
import Searchbar from './SearchbarCats';
import CardView from './CardView';


const Cats = () => {
  const [breeds, setBreeds] = useState([])
    //const [searchTerm, setSearchTerm] = useState('')
    useEffect(() =>{
        const url = 'https://api.thecatapi.com/v1/breeds'
        fetch(url, {
            headers: {
                'x-api-key': `70333dc8-3e31-4380-b622-48fdc97947cb`
            }
        }).then(resp => resp.json())
        .then(resp => setBreeds(resp))
    },[])


  return (  
    <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'black'}}>
            <h1>Search Cat Breeds</h1>
        </div>
        <Searchbar placeholder = "Search Specific Breeds" data = {breeds}/>
        <div>
          {/*For spacing */}
          <h1> </h1>
        </div>
        <CardView/>        
    </div>
  )
}

export default Cats