import  {useEffect , useState}  from 'react'
import IndividualCatPage from './IndividualCatPage'
import "./temp.css"

const CatAPI = () => {
    const [breeds, setBreeds] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
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
                        <a href = "/UniqueCatBreed" >
                            <p>{breed.name}</p>
                        </a>
                        
                    </div>
                </div> 
            )}
            </div>


        </div>
        
    )
}

export default CatAPI
















/*
const api = axios.create({
    baseURL: `https://api.thecatapi.com/v1/breeds`,
    headers: {
        'x-api-key': `70333dc8-3e31-4380-b622-48fdc97947cb`        
    }
})

*/

/*class CatAPI extends React.Component {
    state = {
        breeds: [],
        breedImage: []
    }

    componentDidMount() { 
        this.mounted = true; 
    }
    

    constructor(){
        super();
        api.get('/').then(res =>{
            if(this.mounted){
                this.setState({breeds: res.data})
            }
          
        })
        
    }
    render() {
        return (
            /* Works but will need to pass into functions */
        /*
            <div>
                <CatAPI name = {this.state.breeds.name}/>
                {/*
                {this.state.breeds.map(breeds => 
                    <h2 key = {breeds.id}>   
                            <ul>
                                <div>{breeds.name}</div>
                                <div>{breeds.description}</div>
                                <div>{breeds.temperament}</div>
                                <div>Average Life Span: {breeds.life_span}</div>
                                <div>Adaptability: {breeds.adaptability}</div>
                                <div>Affection Level: {breeds.affection_level}</div>
                            </ul>
                    </h2>)
                }
                
                
            </div>
        
      )
    }
}

*/


