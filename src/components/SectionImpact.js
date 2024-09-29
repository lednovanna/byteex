import React from "react";
import './SectionImpact.css';




function SectionImpact() {
    return (
    <div className="sectionImpact">
<div className="green-impact-section">
  <h2>Our total green impact</h2>
  <div className="impact-items">
  
     <div className="impact-item">
      <div className="icon">
        <img src="/assets/icons/icon36.png" alt="Icon 1" />
      </div>
      <h3>3,927 kg</h3>
      <p>of CO2 saved</p>
      </div>
      <div class="divider"></div>
    <div className="impact-item">
      <div className="icon">
        <img src="/assets/icons/icon39.png" alt="Icon 2" />
      </div>
      <h3>2,546,167 days</h3>
      <p>of drinking water saved</p>
    </div>
    <div class="divider"></div>
    <div className="impact-item">
      <div class="icon">
        <img src="/assets/icons/icon38.png" alt="Icon 3" />
      </div>
      <h3>7,321 kWh</h3>
      <p>of energy saved</p>
    </div>
  </div>
</div>
</div>
)

}
export default SectionImpact;