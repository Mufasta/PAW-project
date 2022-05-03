import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./temp.css"
import CatImage from './CatImage';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config"
import { getDatabase, ref, set, onValue } from "firebase/database"

const ExpertPage = () => {
  const [user, setUser] = useState("")
  const [userFav, setUserFav] = useState("")
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  // const db = getDatabase();
  // const starCountRef = ref(db, 'users/' + user.uid + '/apikey');
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   // setUserFav(data)
  // });
  
  return (
    <div className='breeds' key={"icetyxiw"}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='container' >
        <CatImage imgId={"0XYvRd7oD"} />
        <Link to={{
          pathname: `/UniqueCatBreed/${"abys"}` //takes you to a new page when clicked
        }}>
          <button style={{ width: 100, borderRadius: 5, borderColor: '#388c97', backgroundColor: '#52B2Bf', color: 'black' }}>{"Abyssinian"}</button>
          {/*Displays the breed name with a link to their individual page */}
        </Link>
      </div>
    </div> 
  )
}

export default ExpertPage