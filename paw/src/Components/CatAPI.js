import  {useEffect , useState}  from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import "./temp.css"

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


    return (
        
        <div className='cats'>
            {/*SearchBar - sets up and empty text box*/}
            <input 
                type = 'text' 
                placeholder='Search Cats' //placeholder text visible inside the search bar text box
                onChange={event => {setSearchTerm(event.target.value)}} //when a search term is entered it saves it
            />

            {/* Filtering the search term with the cat api breed names */}
            <div className='dataResult'>
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
                    {console.log(breed.name)} 
                    <div className = 'dataItem'> 
                        <Link to = {{
                            pathname : `/UniqueCatBreed/${breed.id}` //takes you to a new page when clicked
                        }}>
                            {/*Displays the breed name */}
                            <p>{breed.name}</p>
                        </Link>
                    </div>
                </div> 
            )}


            </div>


        </div>
        
    )
}

export default CatAPI















