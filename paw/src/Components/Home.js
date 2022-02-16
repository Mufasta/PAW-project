
import React, { useRef } from "react";
import { Button } from 'react-bootstrap'
import Cats from './Cats'

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
    <div>
        {/* Landing Section */}
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',height: '100vh'}}>
          <ul>
              <h1>Learn About Specific Breeds</h1>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Button onClick={gotoCatSection}>Cats</Button>&nbsp;&nbsp;
                <Button onClick={gotoDogSection}>Dogs</Button>
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
          <h1>Dogs Go Here</h1>
        </div>

    </div>
    
    

  )
}

export default Home