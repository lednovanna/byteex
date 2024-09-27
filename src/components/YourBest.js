import React from "react";
import './YourBest.css';
import Button from "./Button";

function YourBest() {
    return (
        <div className="page-yourBest">
        <div className="section-yourBest ">
            <div className="yourBest-mainSection ">
            <div className="yourBest-image-section ">
        <div className="yourBest-image-container">
          <div className="small-image left" >
            <img src="/assets/img/img1.jpg" alt="Robe" width="100px" height="145px"/>
          </div>
          <div className="main-Image">
            <img src="/assets/img/img2.jpg" alt="Suit" width="380px" height="570px"/>
          </div>
          <div className="small-image right">
            <img src="/assets/img/img3.jpg" alt="Suit" width="100px" height="145px" />
          </div>
        </div>
      </div>
       
      <div className="yourBest-text-section">
        <h2>Be your best self.</h2>
        <p>
          Hi! My name’s [Insert Name], and I founded [Insert] in _______.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
           tincidunt pellentesque, in eget ipsum et felis finibus consequat.
        </p>
        <p>
          Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat 
          ligula, ac consectetur felis varius non.
        </p>
        <p>
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam id. 
          Vivamus in felis eu lacus feugiat aliquam nec in sapien.
        </p>
         <div className="yourBest-btn">
        <Button/>
        </div>
        </div>
        </div>
       
        
        </div>
        </div>
    )
}

export default YourBest;