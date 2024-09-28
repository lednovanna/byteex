import React from "react";
import Button from "./Button";
import './SectionReviews.css';

function SectionReviews() {
    return (
        <div className="sectionReviews">
            <div className="sectionReviews-body">
            <div className="sectionReviews-container">
            <div className="sectionReviews-top">
              <div class="sectionReviews-header">  
            <div className="sectionReviews-icon">
                <img src="/assets/icons/icon15.png" alt="Benefits icon"/>
            </div>
            
            </div>  
            <div className="sectionReviews-reviews">
                
                <img className="sectionReviews-stars" src="/assets/icons/iconstars.png" alt="icon Stars" ></img>
               <div className="sectionReviews-name">Jane S.</div>
                </div>
              
            </div>
            <div className="sectionReviews-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.
                 </div>
           </div>

           <div className="sectionReviews-container">
            <div className="sectionReviews-top">
              <div class="sectionReviews-header">  
            <div className="sectionReviews-icon">
                <img src="/assets/icons/icon15.png" alt="Benefits icon"/>
            </div>
            
            </div>  
            <div className="sectionReviews-reviews">
                
                <img className="sectionReviews-stars" src="/assets/icons/iconstars.png" alt="icon Stars" ></img>
               <div className="sectionReviews-name">Jane S.</div>
                </div>
              
            </div>
            <div className="sectionReviews-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.
                 </div>
           </div>

           <div className="sectionReviews-container">
            <div className="sectionReviews-top">
              <div class="sectionReviews-header">  
            <div className="sectionReviews-icon">
                <img src="/assets/icons/icon15.png" alt="Benefits icon"/>
            </div>
            
            </div>  
            <div className="sectionReviews-reviews">
                
                <img className="sectionReviews-stars" src="/assets/icons/iconstars.png" alt="icon Stars" ></img>
               <div className="sectionReviews-name">Jane S.</div>
                </div>
              
            </div>
            <div className="sectionReviews-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.
                 </div>
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
        </div>
    )
}

export default SectionReviews;