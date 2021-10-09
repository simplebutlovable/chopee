import React, { Component } from 'react';
import "../css/categories.css";


function Categories(){
return(
    <div className="categories">
        <div className="title">CATEGORIES</div>
            <div className="product-tags">
                <div className="next">
                    <div className="next-btn">
                        <svg  width="50" height = "50" viewBox="0 0 50 50" id="nxt-circle">
                            <circle cx="25" cy="25" r="24" stroke="white" stroke-width="0" fill="white"/>                    
                        </svg>
                        <img src="/images/nxt.png"/>
                    </div>
                </div>
                <div className="previous">
                    <div className="prev-btn">
                        <svg  width="50" height = "50" viewBox="0 0 50 50" id="prev-circle">
                            <circle cx="25" cy="25" r="24" stroke="white" stroke-width="0" fill="white"/>    
                        </svg>
                        <img src="/images/prev.png"/>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="tags">
                            <div className="tag-image">
                                <img src=""/>
                            </div>
                            <div className="tag-name">
                                <p>tagname</p>
                            </div>

                        </div>
                    </li>


                </ul>
              
            </div>
        
        </div>
);
}

export default Categories