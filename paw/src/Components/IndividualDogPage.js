import  {useEffect , useState}  from 'react'
import { useLocation } from 'react-router-dom'
import ExtraDogInfo from './ExtraDogInfo'
import DogImage from './IndivDogImage'
import emptystar from '../Images/emptystar.png'
import goldstar from '../Images/goldstar.png'


const IndividualDogPage = () => {
    const [breeds, setBreeds] = useState([]) //use states for setting the breeds
    const location = useLocation()
    const [isFav,setFav]=useState()
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

    function handleFavClick(val) {
        setFav(true)
        console.warn(true)

      }
    
      function handleUnfavClick(val) {
        setFav(false)
        console.warn(false)

      }

    return (
        <>
            {breeds.map(breed => //Sets up the search functionality - links to specific breeds
                <div className='breeds' key = {breed.id}> 
                    <div className = 'dataItem'> 
                        {/*Displays the breed name */}
                        <div>
                            <h1 style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}} >{breed.name}</h1>
                        </div>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'top', marginLeft: '5rem', marginRight: '5rem'}}>
                            <DogImage imgId={breed.reference_image_id}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <div style={{display: 'flex'}}>
                                        {isFav
                                            ? <img src = {goldstar} onClick={handleUnfavClick} height = {40}/>
                                            : <img src = {emptystar} onClick={handleFavClick} height = {40}/>  
                                        } 
                                        &nbsp;&nbsp;
                                        <h2> Favorite</h2>
                                </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2>Life span: {breed.life_span}</h2>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2>Bred for: {breed.bred_for}</h2> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2>Breed group: {breed.breed_group}</h2> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2>Temperament: {breed.temperament}</h2>  
                                    {/* Added this portion to show extra dog info */}
                                    <h2>Testing!!!!</h2>
                                    <ExtraDogInfo nameId={breed.name}/>
                            </div>
                        </div> 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <h3 style = {{alignItems: 'center', marginLeft: '5rem', marginRight: '5rem', textAlign: 'center'}} >{breed.description}</h3>

                    </div>
                </div>
            )}

        </>
    
    )
}

export default IndividualDogPage