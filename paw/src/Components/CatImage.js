import { useLocation } from 'react-router-dom'
import React, {useEffect, useState} from "react";
import notFound from '../Images/catImageNotFound.jpeg'

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
            {state.url !== undefined ? <img style = {{borderRadius: 12, borderColor: '#F7D59C', border: '5px solid #555'}} src ={state.url}/> : 
            <img style = {{borderRadius: 12, borderColor: '#F7D59C', border: '5px solid #555'}} src= {notFound}/>}
        </>
    
    )
    }
    
    export default CatImage