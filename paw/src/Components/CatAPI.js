import  {useEffect , useState}  from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import "./temp.css"
import CatImage from './CatImage';

var page = 0;

const CatAPI = () => {

    const [breeds, setBreeds] = useState([]) //use states for setting the breeds
    const [searchTerm, setSearchTerm] = useState('') //empty string to start the search

    
    //Connecting to the API 
    useEffect(() =>{
        const url = 'https://api.thecatapi.com/v1/breeds'
        fetch(url, {
            headers: { 
                //pass in api key to fetch data
                'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
            }
        }).then(resp => resp.json()) //save the api responses in json format
        .then(resp => setBreeds(resp)) //set the breeds based on the response
    },[])

    
    function incrementPage(){
        page = page + 8;
        console.log(page);
        return page, page + 8;
    }
    function getPage(){
        return page;
    }
    console.log("debug", getPage());
    return (
        
        <div className='cats'>
            {/*SearchBar - sets up and empty text box*/}
            
            <input 
                type = 'text' 
                placeholder='Search Cats' //placeholder text visible inside the search bar text box
                onChange={event => {setSearchTerm(event.target.value)}} //when a search term is entered it saves it
            />

            {/* Filtering the search term with the cat api breed names */}
            <div className='scrollCards'>
            <div className='row row-cols-2 row-cols-sm-4 g-4'>
            
        
            
            {breeds.filter((val) =>{
                if (searchTerm === ""){ //if you havent searched for anyting yet
                    return val
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    console.log(val)
                    return val //filtered value returned based on what you typed
                }       
            }).map(breed => //Sets up the search functionality - links to specific breeds
                
                <div className='breeds' key = {breed.id}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='container'>
                    {/* {console.log(breed.name)}  */}
                    {console.log(page)}
                    <CatImage imgId={breed.reference_image_id}/> 
                    <Link to = {{
                        pathname : `/UniqueCatBreed/${breed.id}` //takes you to a new page when clicked
                    }}>
                        {/*Displays the breed name */}
                        <button style = {{width: 200, borderRadius: 12, borderColor: '#388c97', backgroundColor: '#52B2Bf', color: 'black'}}>{breed.name}</button>
                    </Link>
                </div>
                </div>
                
            )}

            
            </div>      
            </div>


        </div>
        
    )
}

export default CatAPI















