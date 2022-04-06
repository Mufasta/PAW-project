// import React from 'react'
import { useLocation } from 'react-router-dom'
import React, {useEffect} from "react";


   

const IndividualCatPage = () => {
    const location = useLocation();

    useEffect(() =>{
        const id = location.pathname.split("/")[2]
        const url = `https://api.thecatapi.com/v1/breeds/search?q=${id}`
        console.log(url)
        fetch(url, {
            headers: { 
                //pass in api key to fetch data
                'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
            }
        }).then(resp => resp.json()) //save the api responses in json format
        .then(resp =>console.log(resp)) //set the breeds based on the response
    },[])
    
    
    return (
        <>
            <div>IndividualCatPage</div>
            
        </>
    
    )
}

export default IndividualCatPage