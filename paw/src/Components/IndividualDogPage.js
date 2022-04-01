import React from 'react'
import { useLocation } from 'react-router-dom'

const IndividualDogPage = () => {
    const location = useLocation() //not working yet
    const { breedname } = location.state 
    return (
        <>
            <div>IndividualDogPage</div>

            {/* Doest display breed name
            <div>Breed Name: {breedname}</div>
            */}
        </>
    
    )
}

export default IndividualDogPage