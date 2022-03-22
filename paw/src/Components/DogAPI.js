import  {useEffect , useState}  from 'react'
import IndividualCatPage from './IndividualCatPage'
import { Link } from 'react-router-dom';
import "./temp.css"

const DogAPI = () => {
    const [breeds, setBreeds] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() =>{
        const url = 'https://api.thedogapi.com/v1/breeds'
        fetch(url, {
            headers: {
                'x-api-key': `ebd93bb8-a342-4dbd-9bcc-58c9156bbe13`
            }
        }).then(resp => resp.json())
        .then(resp => setBreeds(resp))
    },[])


    return (
        
        <div className='dogs'>
            
            <input 
                type = 'text' 
                placeholder='Search Dogs' 
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
                            pathname : "/UniqueDogBreed", 
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

export default DogAPI
