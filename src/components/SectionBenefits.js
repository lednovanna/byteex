import React from "react";
import './SectionBenefits.css';

function Benefits() {
    return (
        <div className="sectionBenefits ">
           <div className="sectionBenefits-container">
            <div className="sectionBenefits-top">
              <div class="sectionBenefits-header">  
            <div className="sectionBenefits-icon">
                <img src="/assets/icons/icon10.png" alt="Benefits icon"/>
            </div>
            <div className="sectionBenefits-name">Amy P.</div>
            </div>  
            <div className="sectionBenefits-reviews">
                <img className="sectionBenefits-stars" src="/assets/icons/iconstars.png" alt="icon Stars" ></img>
               <div> One of 500+ 5 Star Reviews Online</div>
                </div>
              
            </div>
            <div className="sectionBenefits-text">Overjoyed with my Loungewear set.
                 I have the jogger and the sweatshirt. Quality product on every level. 
                 From the compostable packaging, to the supplied washing bag, even the 
                 garments smells like fresh herbs when I first held them. 
                 </div>
           </div>
        </div>
    )
}

export default Benefits;