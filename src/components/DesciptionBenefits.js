import React from "react";
import './DescriptionBenefits.css';
import SliderCarusel from "./SliderCarusel";


function DescriptionBenefits() {
    return (
      <div className="descriptionBenefits-section ">
        
        <div className="descriptionBenefits-body-section">
        <div className="descriptionBenefits-body ">
            <div className="descriptionBenefits-top">
                <div className="top-text">as seen in</div>
                <div className="descriptionBenefits-brands">
                    <img className="icon-brand" src="/assets/icons/icon11.png" alt="Brand icon" width="178px" height="22px"></img>
                    <img className="icon-brand" src="/assets/icons/icon12.png" alt="Brand icon" width="111px" height="52px"></img>
                    <img className="icon-brand" src="/assets/icons/icon4.png" alt="Brand icon" width="270px" height="53px"></img>
                    <img className="icon-brand" src="/assets/icons/icon3.png" alt="Brand icon" width="194px" height="37px"></img>
                    <img className="icon-brand" src="/assets/icons/icon2.png" alt="Brand icon" width="192px" height="58px"></img>
                </div>
            </div>
          </div>
        </div>

        <div className="mainSectionBenefits">
            <div className="mainSection-body">
                <div className="mainSectionBenefits-textBlock">
                    <h2 className="mainSectionBenefits-title">
                        Loungewear you can be proud of.
                    </h2>

                    <div className="mainSectionBenefits-listContainer">
                        <div className="mainSectionBenefits-list">
                            <div className="mainSectionBenefits-item">
                                <img className="mainSectionBenefits-icon" src="/assets/icons/icon8.png" alt="main-icon" />
                            </div>
                            <div className="mainSectionBenefits-title">Ethically sourced.</div>
                            <div className="mainSectionBenefits-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</div>
                        </div>

                        <div className="mainSectionBenefits-list">
                            <div className="mainSectionBenefits-item">
                                <img className="mainSectionBenefits-icon" src="/assets/icons/icon1.png" alt="main-icon" />
                            </div>
                            <div className="mainSectionBenefits-title">Responsibly made.</div>
                            <div className="mainSectionBenefits-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</div>
                        </div>

                        <div className="mainSectionBenefits-list"> 
                            <div className="mainSectionBenefits-item">
                                <img className="mainSectionBenefits-icon" src="/assets/icons/icon27.png" alt="main-icon" />
                            </div>
                            <div className="mainSectionBenefits-title">Made for living in.</div>
                            <div className="mainSectionBenefits-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</div>
                        </div>

                        <div className="mainSectionBenefits-list">
                            <div className="mainSectionBenefits-item">
                                <img className="mainSectionBenefits-icon" src="/assets/icons/icon9.png" alt="main-icon" />
                            </div>
                            <div className="mainSectionBenefits-title">Unimaginably comfortable.</div>
                            <div className="mainSectionBenefits-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</div>
                        </div>
                    </div>
                </div>

                
                    <div className="slider-section">
                        
                        <SliderCarusel/>
                
                </div>
            </div>
        </div>
      </div>
    );
}

export default DescriptionBenefits;
