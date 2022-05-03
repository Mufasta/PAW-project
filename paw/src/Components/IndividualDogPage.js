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
                            <h1 style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}} className="text-decoration-underline">{breed.name}</h1>
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
                                        <h2 className="fw-bolder"> Favorite</h2>
                                </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2 className="fw-bolder">Life span:</h2> <h2 className="fw-normal">{breed.life_span}</h2>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2 className="fw-bolder">Bred for:</h2> <h2 className="fw-normal">{breed.bred_for}</h2> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2 className="fw-bolder">Breed group:</h2> <h2 className="fw-normal">{breed.breed_group}</h2> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2 className="fw-bolder" >Temperament:</h2> <h2 className="fw-normal"> {breed.temperament}</h2>
                                    {/* Added this portion to show extra dog info */}
                                    {/*<h2>Testing!!!!</h2>*/}
                            </div>
                        </div> 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div style = {{alignItems: 'center', marginLeft: '5rem', marginRight: '5rem', textAlign: 'center'}}>
                            <ExtraDogInfo nameId={breed.name}/>
                        </div>
                    </div>
                </div>
            )}

        </>
    
    )
}

export default IndividualDogPage