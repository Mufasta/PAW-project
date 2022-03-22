import  {useEffect , useState}  from 'react'
import IndividualCatPage from './IndividualCatPage'
import { Link } from 'react-router-dom';
import "./temp.css"


const CatAPI = () => {
    const [breeds, setBreeds] = useState([]) //use states for setting the breeds
    const [searchTerm, setSearchTerm] = useState('') //empty string to start the search
    useEffect(() =>{ //Connecting to the API 
        const url = 'https://api.thecatapi.com/v1/breeds'
        fetch(url, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
            }
        }).then(resp => resp.json())
        .then(resp => setBreeds(resp))
    },[])


    return (
        
        <div className='cats'>
            
            <input 
                type = 'text' 
                placeholder='Search Cats' 
                onChange={event => {setSearchTerm(event.target.value)}}
            />

            <div className='dataResult'>
            {breeds.filter((val) =>{
                if (searchTerm === ""){
                    return val
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }       
            }).map(breed =>
                <div className='breeds' key = {breeds.id}>  
                    <div className = 'dataItem'>
                        <Link to = {{
                            pathname : "/UniqueCatBreed", 
                            state:{
                                breedname : breed.name /*Trying to pass the breed name here - not working*/
                            }
                        }}>
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















