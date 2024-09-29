import React from "react";
import './SectionComfort.css';
import Button from "./Button";


function SectionComfort() {
    return (
        <div className="sectionComfort ">
            <div className="sectionComfort-title">
             <h2>Comfort made easy</h2>
             </div>
<div className="features-container">

  <div className="feature-item">
    <div className="icon">
      <img src="/assets/icons/icon14.png" alt="Icon 1" />
    </div>
    <h3>You save.</h3>
    <p>Browse our comfort sets and save 15% when you bundle.</p>
  </div>

  
  <div className="feature-item highlight">
    <div className="icon">
      <img src="/assets/icons/icon13.png" alt="Icon 2" />
    </div>
    <h3>We ship.</h3>
    <p>We ship your items within 1-2 days of receiving your order.</p>
  </div>

  
  <div className="feature-item">
    <div className="icon">
      <img src="/assets/icons/icon27.png" alt="Icon 3" />
    </div>
    <h3>You enjoy!</h3>
    <p>Wear them around the house, out on the town, or in bed.</p>
  </div>
</div>




<div className="sectionComfort-btn">
    <Button/>
    </div>
    <div className="sectionComfort-reviews">
        <div className="sectionComfort-raiting">
                <img className="sectionComfort-stars" src="/assets/icons/iconstars.png" alt="icon Stars" ></img>
                 <div>One of 500+ 5 Star Reviews Online</div>
                 </div>
                </div>
                
                <div className="sectionComfort-bottom">
                <div className="sectionComfort-title">
             <h2>What are our fans saying?</h2>
             </div>
             <div className="sectionComfort-bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</div>
             </div>
        </div>
    )
}

export default SectionComfort;