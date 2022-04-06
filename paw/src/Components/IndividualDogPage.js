import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom'

const IndividualDogPage = () => {
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
        .then(resp =>console.log(resp)) //set the breeds based on the response
    },[])
    return (
        <>
            <div>IndividualDogPage</div>
        </>
    
    )
}

export default IndividualDogPage