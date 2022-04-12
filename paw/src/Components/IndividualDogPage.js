import  {useEffect , useState}  from 'react'
import { useLocation } from 'react-router-dom'
import DogImage from './DogImage'

const IndividualDogPage = () => {
    const [breeds, setBreeds] = useState([]) //use states for setting the breeds
    const location = useLocation()
    useEffect(() =>{
        const id = location.pathname.split("/")[2]
        console.log(id)
        const id2 = id.split(" ").join("_")
        const url = `https://api.thedogapi.com/v1/breeds/search?q=${id2}`
        console.log(url)
        fetch(url, {
            headers: { 
                //pass in api key to fetch data
                'x-api-key': `${process.env.REACT_APP_DOG_API_KEY}`
            }
        }).then(resp => resp.json()) //save the api responses in json format
        .then(resp =>setBreeds(resp)) //set the breeds based on the response
    },[])
    return (
        <>
            {breeds.map(breed => //Sets up the search functionality - links to specific breeds
                <div className='breeds' key = {breed.id}> 
                    <div className = 'dataItem'> 
                        {/*Displays the breed name */}
                        <h2>{breed.name}</h2>
                        <h3>Bred for: {breed.bred_for}</h3>    
                        <h3>Breed group: {breed.breed_group}</h3>  
                        <h2>{breed.description}</h2>
                        <h3>Life span: {breed.life_span}</h3>
                        <h2>Temperament: {breed.temperament}</h2>
                        <DogImage imgId={breed.reference_image_id}/>
                    </div>
                </div> 
            )}

        </>
    
    )
}

export default IndividualDogPage