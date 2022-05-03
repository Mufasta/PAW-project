// import React from 'react'
import { useLocation } from 'react-router-dom'
import React, {useEffect, useState} from "react";
import CatImage from './IndivCatImage';
import { propTypes } from 'react-bootstrap/esm/Image';
import emptystar from '../Images/emptystar.png'
import goldstar from '../Images/goldstar.png'
import { render } from 'react-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config"
import { getDatabase, ref, set } from "firebase/database"

const IndividualCatPage = (props) => {
    const [breeds, setBreeds] = useState([])
    const location = useLocation();
    const [isFav,setFav]=useState();
    const [user, setUser] = useState("")
    console.log(location);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
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
    
      function handleFavClick(val) {
        setFav(true)
        console.warn(true)
        const db = getDatabase();
        // const user = props.currentUser
        // console.log(user)
        set(ref(db, 'users/' + user.uid), {
            apikey: val
        });
        console.log("added to database.")

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
                            <CatImage imgId={breed.reference_image_id}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <div style={{display: 'flex'}}>
                                        {isFav
                                            ? <img src = {goldstar} onClick={() => handleUnfavClick(breed.id)} height = {40}/>
                                        : <img src={emptystar} onClick={() => handleFavClick(breed.id)} height = {40}/>  
                                        }        
                                        &nbsp;&nbsp;
                                    <h2 className="fw-bolder"> Favorite</h2>
                                </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2 className="fw-bolder">Life span:</h2> <h2 className="fw-normal">{breed.life_span}</h2>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h2 className="fw-bolder" >Temperament:</h2> <h2 className="fw-normal"> {breed.temperament}</h2>
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {/*<h3>Bred for: {breed.bred_for}</h3> */} 
                        {/* <h3>Breed group: {breed.breed_group}</h3> */}
                        <h3 style = {{alignItems: 'center', marginLeft: '5rem', marginRight: '5rem', textAlign: 'center'}} >{breed.description}</h3>
                     
                        {/*<h2>Image: {breed.reference_image_id}</h2>*/}
                       
                    </div>
                </div> 
                
            )}
        </>
    
    )
}

export default IndividualCatPage