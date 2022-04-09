// import React from 'react'
import { useLocation } from 'react-router-dom'
import React, {useEffect, useState} from "react";
import CatImage from './CatImage';
import { propTypes } from 'react-bootstrap/esm/Image';


   

const IndividualCatPage = () => {
    const [breeds, setBreeds] = useState([])
    const location = useLocation();
    console.log(location)

    

    useEffect(() =>{
        const id = location.pathname.split("/")[2]
        const url = `https://api.thecatapi.com/v1/breeds/search?q=${id}`
        fetch(url, {
            headers: { 
                //pass in api key to fetch data
                'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
            }
        }).then(resp => resp.json()) //save the api responses in json format
        .then(resp =>{
            console.log(resp)
            setBreeds(resp)
        }) //set the breeds based on the response

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
                        <h2>Image: {breed.reference_image_id}</h2>
                        <CatImage imgId={breed.reference_image_id}/>
                    </div>
                </div> 
                
            )}
        </>
    
    )
}

export default IndividualCatPage