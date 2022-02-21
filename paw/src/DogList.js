import React from 'react'
import Dog from './Dog'
import './DogList.css'

//add props parameter
const DogList = (props) => {

    const dogsArray = props.dogs.map((dogURL) => {
        return <Dog url={dogURL} /> //return dog component
        //iterate over each url, create dog comp
        //pass prop
    })

    return (
        <div className="container">
            {dogsArray}
        </div>
        )
}

export default DogList;