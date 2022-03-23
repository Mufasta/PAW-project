import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import dogshelter from '../Images/dogshelter.jpg'
import catshelter from '../Images/catshelter.jpg'
import walk from '../Images/walk.png'


const SheltersPage = () => {

  const [data,setData]=useState('')
  
    function getData(val)
    {
      console.warn(val.target.value)
      setData(val.target.value)
    }

  return (    

    <div>
    <h1 style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>Find Animal Shelters in Your Area!</h1> 
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <img src={dogshelter} height = {400}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={catshelter} height = {400}/>
            </div>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', headertitleAlign: 'center'}}>
      <h4> There are over 3,500 animal shelters in the US alone, and more than 6 million animals enter a US shelter every year. </h4>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
      <h3>Your new best friend could be right around the corner!</h3>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> 
      <img src={walk} height = {200}/>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}>
      <h3> Input your zipcode down below to find any shelters near you.</h3>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input 
        type="text" 
        placeholder='Zipcode' 
        style={{paddingy: '10'}} 
        onChange= {getData} />
        &nbsp;&nbsp;&nbsp;
        <Button
          size = "lg" 
          style = {{paddingy: '10', width: 200, borderRadius: 12, borderColor: '#F7D59C', backgroundColor: '#F7D59C', color: 'black'}} 
          onClick={() => {
              window.open(
              'https://www.google.com/maps/search/'+data+'+animal+shelters',
              '_blank'
              );
          }} >Enter</Button>
    </div>
</div>

  )
}

export default SheltersPage
