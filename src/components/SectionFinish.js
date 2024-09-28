import React from "react";
import './SectionFinish.css';
import Button from "./Button";

function SectionFinish() {
    return (
        <div className="sectionFinish">
            <div className="SectionFinish-top">
            <div className="SectionFinish-title">
                <h2>Find something you love.</h2>
            </div>
            <div className="sectionFinish-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Fusce lobortis sapien <br></br> facilisis tincidunt pellentesque. 
                 In eget ipsum et felis finibus consequat.</div>
            </div>

            <div className="mainSection-collage finish">
      <div className="collage-item">
        <div className="collage-bg"></div>
      <img className="collage-img small" src="/assets/img/img27.jpg" alt="main section collage"  />
     </div>
     <div className="collage-item">
     
      <img className="collage-img large" src="/assets/img/img43.png" alt="main section collage"/>
      </div>
      <div className="collage-item">
       <div className="collage-bg-left"></div>
      <img  className="collage-img small" src="/assets/img/img3.jpg" alt="main section collage" />
      </div>
    </div>
    <div className="buttonFinish-section">
    <div className="sectionFinish-button">
        <Button/>
        
    </div>
     <div className="section-finishText">
        <div className="finishBody">
            <div className="finishBody-item">
        <img className="finish-item" src="/assets/icons/icon37.png" alt="clock"></img>
        </div>
        <div className="finishText-text">Ships in 1-2 Days</div>
        <div class="dividerFinish"></div>
        <div className="finishText-icon">
        <img src="/assets/icons/icon40.png" alt="group of icons"></img>
     </div>
        </div> 
          </div>

          </div>
        </div>
    )
}

export default SectionFinish;