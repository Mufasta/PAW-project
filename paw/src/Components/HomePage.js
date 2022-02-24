
import React, { useRef } from "react";
import { Button } from 'react-bootstrap'
import Cats from './Cats'
import Dogs from './Dogs'
import background from '../Images/pets.jpg'

const Home = () => {

  //smooth scroll fucntionality
  const catSection = useRef(null);
  const dogSection = useRef(null);

  //functions for buttons
  const gotoCatSection = () => window.scrollTo({ 
    top: catSection.current.offsetTop, 
    behavior: "smooth"
  });
  const gotoDogSection = () => window.scrollTo({ 
    top: dogSection.current.offsetTop, 
    behavior: "smooth"
  });



  return (
    <div style={{ background: `url(${background})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top'}}>
        {/* Landing Section */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <ul>
              <h1>Learn About Specific Breeds</h1>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Button size = "lg" style = {{width: 200, borderRadius: 12, borderColor: '#F7D59C', backgroundColor: '#F7D59C', color: 'black'}} onClick={gotoCatSection}>Cats</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button size = "lg" style = {{width: 200, borderRadius: 12, borderColor: '#F7D59C', backgroundColor: '#F7D59C', color: 'black'}} onClick={gotoDogSection}>Dogs</Button>
              </div>
          </ul>
        </div>
        {/* Cats Section */}
        <div style={{height:'55vh'}}>
          <h3 ref = {catSection}> </h3>{/* reference hook for smooth scroll */}
          <Cats/>
        </div>
        {/*TODO Dogs */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',height: '100vh'}}>
          <h3 ref = {dogSection}> </h3>{/* reference hook for smooth scroll */}
          <Dogs/>
        </div>

    </div>
    
    

  )
}

export default Home