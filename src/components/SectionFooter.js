import React from "react";
import './SectionFooter.css';

function SectionFooter() {
    return (
        <div className="sectionFooter">
            
            <div className="featuresFinish-section">
                <div className="featureFinish-body">
        <div class="feature-itemFinish"> 
    <img src="/assets/icons/icon41.png" alt="Shipping Icon" />
    <p>FREE Shipping on Orders over $200</p>
    </div>
  <div class="divider"></div>
  <div class="feature-itemFinish">
    <img src="/assets/icons/icon42.png" alt="Reviews Icon" />
    <p>Over 500+ 5 Star <br/> Reviews Online</p>
  </div>
  <div class="divider"></div>
  <div class="feature-itemFinish">
    <img src="/assets/icons/icon43.png" alt="Ethical Icon" />
    <p>Made ethically and responsibly.</p>
  </div>
     </div>
     </div>
        </div>
        
              
    )
}

export default SectionFooter;