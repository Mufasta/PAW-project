import  {useEffect , useState}  from 'react'
import { useLocation } from 'react-router-dom'


const ExtraDogInfo = (props) => {
    const [breeds, setBreeds] = useState([]) //use states for setting the breeds
    const location = useLocation()
    useEffect(() =>{
        const id = props.nameId
        console.log(id)
        const url = `https://api-dog-breeds.herokuapp.com/api/search?q=${id}`
        console.log(url)
        fetch(url, {}).then(resp => resp.json()) //save the api responses in json format
        .then(resp =>setBreeds(resp)) //set the breeds based on the response
    },[])
    // console.log(breeds[0].description)
    console.log(breeds)

    if(breeds[0] === undefined){
        return (
            <>
            {/*<h2>first if</h2>*/}
            <h2>No Description</h2>
            </>
        )
    }else{
        return(
            <>
            {/*<h2>second if</h2>*/}
            {breeds[0].description === undefined ? <h2>No Description</h2>:<h2>{breeds[0].description} </h2> }
            </>
        )
    }
    
    return(
        <>
        <h2>nothing found</h2>
        </>
    )
}

export default ExtraDogInfo