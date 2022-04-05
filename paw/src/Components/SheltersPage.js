import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import dogshelter from '../Images/dogshelter.jpg'
import catshelter from '../Images/catshelter.jpg'
import walk from '../Images/walk.png'
import Accordion from './Accordion'
import { accordionData } from './ShelterContent'

const SheltersPage = () => {
  //Constant and function needed to get value from textbox when a button is pressed.
  const [data,setData]=useState('')
    function getData(val)
    {
      console.warn(val.target.value)
      setData(val.target.value)
    }
  return (    
    //Layout of the shelter page
    <div>
    <h1 style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>Find Animal Shelters in Your Area!</h1> 
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {/*Two shelter images at the top of the page*/}
            <img src={dogshelter} height = {400}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={catshelter} height = {400}/>
            </div>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', headertitleAlign: 'center'}}>
       {/*headers to organize each segment of the page*/}
      <h4> There are over 3,500 animal shelters in the US alone, and more than 6 million animals enter a US shelter every year. </h4>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
      <h3>Your new best friend could be right around the corner!</h3>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> 
       {/*Png icon to break up the text*/}
      <img src={walk} height = {200}/>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}>
       {/*Introduce the zipcode shelter location function*/}
      <h3> Input your zipcode down below to find any shelters near you.</h3>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         {/*textbox creation, with placeholder, padding, and function when its state changes*/}
        <input 
        type="text" 
        placeholder='Zipcode' 
        style={{paddingy: '10'}} 
        onChange= {getData} />
        &nbsp;&nbsp;&nbsp;
         {/*button creation, size, padding, color, and function for when it is pressed*/}
        <Button
          size = "lg" 
          style = {{paddingy: '10', width: 200, borderRadius: 12, borderColor: '#F7D59C', backgroundColor: '#F7D59C', color: 'black'}} 
          onClick={() => {
             {/*a new window opens with the link below, the data variable is whatever number the user inputted into the textbox*/}
              window.open(
              'https://www.google.com/maps/search/'+data+'+animal+shelters',
              '_blank'
              );
          }} >Enter</Button>
    </div>
     {/*More headers to introduce the requirements section*/}
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
      <h4>Pet adoption requirements can vary depening on location.</h4>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
      <h4>Check down below for some information about adopting a pet.</h4>
    </div>
     {/*accordian style object, same structure as in the about page*/}
    <div className="accordion">
       {/*references the accordian data imported at the top, displaying the title and content*/}
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />))}
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
      <h3>It is important to know what is needed of you before you start the adoption process.</h3>
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
      <h3>Call or visit the shelter beforehand to verify the requirements and ask any questions!</h3>
    </div>
</div>

  )
}

export default SheltersPage
