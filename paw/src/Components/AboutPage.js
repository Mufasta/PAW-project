import React from 'react'
import "../css/styles.css"
import petsAboutUs from '../Images/petsAboutUs.png'
import Accordion from './Accordion';
import { accordionData } from './AboutContent';


const AboutPage = () => {
  return (
    <div className="about">
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-7">  
        <img src={petsAboutUs}/>
        </div>
        <div class="col-lg-5">
          <h1>About Paw</h1>
          <p>
            PAW (Pets Are Wonderful) is here to help first time pet owners and current pet owners Learn
            more about the different dog and cat breeds. Our team is dedicated and here to help you find and care for you pets.
          </p>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutPage