import { useLocation } from 'react-router-dom'
import React, {useEffect, useState} from "react";

const CatImage = (props) => {
    const [state, setState] = useState({
        url: undefined
    })
    const location = useLocation();

    useEffect(() =>{
    const id = props.imgId
    const url2 = `https://api.thecatapi.com/v1/images/${id}`
        fetch(url2, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_CAT_API_KEY}`
            }
        }).then(resp => resp.json()) //save the api responses in json format
        .then(resp =>{
            setState({url: resp.url})
        }) //set the breeds based on the response
    },[])

    return (
        <>
            {state.url !== undefined ? <img src={state.url}/> : <p>Loading</p>}
        </>
    
    )
    }
    
    export default CatImage