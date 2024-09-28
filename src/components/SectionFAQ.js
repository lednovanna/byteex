import React from "react";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import './SectionFAQ.css';

function ExpandableText({ children }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    const content = React.Children.toArray(children).join('');

    return (
        <div>
            
                {isExpanded ? content : `${content.substring(0, 0)} `}
               <button onClick={toggleExpand} className="FAQ-btn">
                {isExpanded ? <FiMinus /> : <FaPlus /> }
            </button>
            
           
        </div>
    );
}

export default function SectionFAQ() {
    return (
        <div className="sectionFAQ">
            <div className="sectionFAQ-body">
                <div className="sectionFAQ-title">
            <h2>Find something you love.</h2>
                </div>
                  <div className="blockSection">
                  <div className="sectionFAQ-block">
                <div className="blog-text">
                    <div className="block-title">
                        <h4>lorem ipsum dolor sit amet</h4>
                        </div>
                        
                    <ExpandableText>   
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
                     In eget ipsum et felis finibus consequat.
                    </ExpandableText>
                    
                    <hr/>
                </div>
                <div className="blog-text">
                    <div className="block-title">
                        <h4>lorem ipsum dolor sit amet</h4>
                        </div>
                    <ExpandableText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
                     In eget ipsum et felis finibus consequat.
                    </ExpandableText>
                    <hr/>
                </div>
                <div className="blog-text">
                    <div className="block-title">
                        <h4>lorem ipsum dolor sit amet</h4>
                        </div>
                    <ExpandableText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
                     In eget ipsum et felis finibus consequat.
                    </ExpandableText>
                    <hr/>
                </div>
                <div className="blog-text">
                    <div className="block-title">
                        <h4>lorem ipsum dolor sit amet</h4>
                        </div>
                    <ExpandableText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
                     In eget ipsum et felis finibus consequat.
                    </ExpandableText>
                    <hr/>
                </div>
                <div className="blog-text">
                    <div className="block-title">
                        <h4>lorem ipsum dolor sit amet</h4>
                        </div>
                    <ExpandableText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
                     In eget ipsum et felis finibus consequat.
                    </ExpandableText>
                    <hr/>
                </div>
                <div className="blog-text">
                    <div className="block-title">
                        <h4>lorem ipsum dolor sit amet</h4>
                        </div>
                    <ExpandableText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
                     In eget ipsum et felis finibus consequat.
                    </ExpandableText>
                    <hr/>
                </div>    
            </div>
            <div className="sectionFAQ-collage">
            <div className="sectionFAQ-image-section ">
        <div className="sectionFAQ-image-container">
          <div className="smallFAQ-image leftFAQ" >
            <img src="/assets/img/img1.jpg" alt="Robe" width="200px" height="149px"/>
          </div>
          <div className="mainFAQ-image">
            <img src="/assets/img/img3.jpg" alt="Suit" width="227px" height="355px"/>
          </div>
          <div className="smallFAQ-image rightFAQ">
            <img src="/assets/img/img27.jpg" alt="Suit" width="167px" height="253px" />
          </div>
        </div>
      </div>
            </div>
            </div>
          </div>
        </div>
    );
}