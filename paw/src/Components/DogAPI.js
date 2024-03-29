import  {useEffect , useState}  from 'react'
import IndividualCatPage from './IndividualCatPage'
import { Link } from 'react-router-dom';
import ReactDom from "react-dom";
import "./temp.css"
import DogImage from './DogImage'

const DogAPI = () => {
    const [breeds, setBreeds] = useState([]) //use states for setting the breeds
    //breeds - current state, setBreed - update state -check us
    const [searchTerm, setSearchTerm] = useState('')//empty string to start the search
    //seartTerm - current state, setSearchTerm - update state
    //useState - empty string
    

    useEffect(() =>{
        //Connecting to the API 
        const url = 'https://api.thedogapi.com/v1/breeds'
        fetch(url, {
            headers: {
                //pass in api key to fetch data
                'x-api-key': `${process.env.REACT_APP_DOG_API_KEY}`
            }
        }).then(resp => resp.json())//save the api responses in json format
        .then(resp => setBreeds(resp))//set the breeds based on the response
    },[])


    return (
        
        <div className='dogs'>
            {/*SearchBar - sets up and empty text box*/}
            <input 
                type = 'text' 
                placeholder='Search Dogs' //placeholder text visible inside the search bar text box
                onChange={event => {setSearchTerm(event.target.value)}}//when a search term is entered it saves it
            />

            <div className='scrollCards'>
            <div className='row row-cols-2 row-cols-sm-4 g-4'>
             {/* Filtering the search term with the dog api breed names */}
            {breeds.filter((val) =>{
                if (searchTerm === ""){//if you havent searched for anyting yet
                    return val
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val //filtered value returned based on what you typed
                }       
            }).map(breed =>
                <div className='breeds' key = {breeds.id}> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <div className = 'container'>
                    <DogImage imgId={breed.reference_image_id}/>
                        <Link to = {{
                            pathname : `/UniqueDogBreed/${breed.name}`//Sets up the search functionality
                        }}>
                             {/*Displays the breed name with a link to their individual page */}
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


export default DogAPI
