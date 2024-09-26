import React from "react";
import './HeroSection.css';
import Button from './Button';



function HeroSection() {
    return (
      <div className="App">
       <div className="heroSection-container ">
        <div className="heroSection-top">
         <span class="hide-on-small-screen">CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)</span>
          <span class="hide-on-small-screen"> | </span>
             <span >FREE SHIPPING on orders  $200</span>
              <span class="hide-on-small-screen"> | </span>
              <span class="hide-on-small-screen">easy 45 day return window</span>
              </div> 
          </div>
             <div className="heroSection-logo ">
              <img src="/assets/icons/logo.png" alt="Company Logo" className="logo"/>
              </div>
              
              <div className="mainSection">
  <div className="mainSection-body">
    <div className="mainSection-textBlock">
      <h1 className="mainSection-title">Don’t apologize for being <br /> comfortable.</h1>

      <div className="mainSection-listContainer">
        <div className="mainSection-list">
          <div className="mainSection-item">
            <img className="mainSection-icon" src="/assets/icons/icon8.png" alt="main-icon" />
          </div>
          <div className="mainSection-text">Beautiful, comfortable loungewear for day or night.</div>
        </div>
        <div className="mainSection-list">
          <div className="mainSection-item">
            <img className="mainSection-icon" src="/assets/icons/icon5.png" alt="main-icon" />
          </div>
          <div className="mainSection-text">No wasteful extras, like tags or plastic packaging.</div>
        </div>
        <div className="mainSection-list">
          <div className="mainSection-item">
            <img className="mainSection-icon" src="/assets/icons/icon9.png" alt="main-icon" />
          </div>
          <div className="mainSection-text">Our signature fabric is incredibly comfortable — unlike <br/> anything you’ve ever felt.</div>
        </div>
        <Button/>
      </div>
    </div>

    <div className="mainSection-collage">
      <div className="collage-item">
        <div className="collage-bg"></div>
      <img className="collage-img small" src="/assets/img/img1.jpg" alt="main section collage"  />
     </div>
     <div className="collage-item">
     
      <img className="collage-img large" src="/assets/img/img2.jpg" alt="main section collage"/>
      </div>
      <div className="collage-item">
       <div className="collage-bg-left"></div>
      <img  className="collage-img small" src="/assets/img/img3.jpg" alt="main section collage" />
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  export default HeroSection;
  