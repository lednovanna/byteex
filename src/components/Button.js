import React from "react";
import './Button.css';

function Button() {
    return (
        <div className="button">
            <button className="btn"> Customize Your Outfit
                 <span className="btn-arrow">
                    <img src="/assets/icons/arromBtn.png" alt="arrow"/>
                 </span>
                 </button>
        </div>
    )
}

export default Button;