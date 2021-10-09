import React, { Component } from 'react';
import {BrowserRouter as Router, Switch , Link} from "react-router-dom"
import "../css/header.css";

function Header(){
    return (
    <header>
        <nav className="header_nav">
            <div className="topnav">
                <div className="left-nav">
                    <ul>
                        <li> <a href="#"> Seller Centre</a></li>
                        <li> <a href="#">Sell on Choppe</a></li>
                        <li> <a href="#">Download</a></li>
                        <li>
                            <div id="follow">
                                <p>Follow us on</p>
                                <a href="http://localhost:8000/admin"> <img src="/images/fb.png" alt="fb"/> </a>
                                <a href="#"> <img src="/images/insta.png" alt="instagram"/> </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="right-nav">
                    <ul>
                        <li>
                            <div className="notification">
                                <a href="#">
                                    <img src="/images/notification.png" alt="notification"/>
                                    <p>Notification</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="help">
                                <a href="#">
                                    <img src="/images/help.png" alt="help"/>
                                    <p>Help</p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div id="authenticate">
                               <Link to="/user/auth/signup/"> <p id="signup">Sign Up</p></Link>
                               <Link to="/user/auth/login/"> <p id="login">Login</p></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="middlenav">
                <div className="chopee-logo">
                    <img src="images/Chopee.png" alt="Chopee"/>
                </div>
                <div className="search-btn">
                    <div className="search-function">
                        <input type="text" id="search-input" placeholder="9.9 Deals as low as &#8369;9 "/>
                        <img src="/images/search_logo.png"/>
                    </div>
                    <div className="treding">
                        <ul>
                            <li>Dog Phone Case</li>
                            <li>Xiaomi Phonce Case</li>
                            <li>iPhone 6</li>
                            <li>Tide iPhone</li>
                            <li>Redmi 5 Plus Case</li>
                            <li>iPhone 6 Plus Case</li>
                            <li>Study Table</li>
                            <li>Case for iPhone 6s Plus</li>
                        </ul>
                    </div>
                </div>

                <div className="cart">
                    <img src="/images/cart.png"/>
                </div>
            </div>

        </nav>
    </header>
    )
}

export default Header